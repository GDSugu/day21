import React from "react"
import User from "./User"
import styles from "./index.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';




class App extends React.Component{
  

   list = [{
    "plan":"Free",
    "price":"$0",
    "list1":"Single User",
    "list2":"5GB Storage",
    "list3":"Unlimited Public Projects",
    "list4":"Community Access",
    "list5":"Unlimited Private Projects",
    "list6":"Dedicated Phone Support",
    "list7":"Free Subdomain",
    "list8":"Monthly Status Reports"
  },
  {
    "plan":"Plus",
    "price":"$9",
    "list1":"5 Users",
    "list2":"50GB Storage",
    "list3":"Unlimited Public Projects",
    "list4":"Community Access",
    "list5":"Unlimited Private Projects",
    "list6":"Dedicated Phone Support",
    "list7":"Free Subdomain",
    "list8":"Monthly Status Reports"
  },
  {
    "plan":"Pro",
    "price":"$49",
    "list1":"Unlimited Users",
    "list2":"150GB Storage",
    "list3":"Unlimited Public Projects",
    "list4":"Community Access",
    "list5":"Unlimited Private Projects",
    "list6":"Dedicated Phone Support",
    "list7":"Unlimited Free Subdomain",
    "list8":"Monthly Status Reports"
    
  }]

  

    render(){
      return(
        this.list.map(ele=>{
            return <User key={ele.list1} {...ele} />
          }) 
    );
    } 
}

export default App;


