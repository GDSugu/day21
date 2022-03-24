import React from "react"
import styles from "./index.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class User extends React.Component{
    render(){
        return(
            <div class="col-lg-4">
                <div class="card md-4">
                    <div class="card-body">
                        <h5 class="card-title text-muted text-uppercase text-center"> {this.props.plan} </h5>
                        <h6 class="card-price text-center">{this.props.price}<span class="period">/month</span></h6>
                        
                        <ul class="fa-ul">
                            
                            <li><span class="fa-li"><i className="fa fa-check"></i></span>{this.props.price=="$0"?`${this.props.list1}`:<b>{this.props.list1}</b>}</li>
                            <li><span class="fa-li"><i className="fa fa-check"></i></span>{this.props.list2}</li>
                            <li><span class="fa-li"><i className="fa fa-check"></i></span>{this.props.list3}</li>
                            <li><span class="fa-li"><i className="fa fa-check"></i></span>{this.props.list4}</li>
                            


                            {this.props.price=="$0"? 
                            <li class="text-muted"><span class="fa-li"><i className="fa fa-times"></i></span>{this.props.list5}</li>:
                            <li><span class="fa-li"><i className="fa fa-check"></i></span>{this.props.list5}</li>}

                            {this.props.price=="$0"? 
                            <li class="text-muted"><span class="fa-li"><i className="fa fa-times"></i></span>{this.props.list6}</li>:
                            <li><span class="fa-li"><i className="fa fa-check"></i></span>{this.props.list6}</li>}

                            {this.props.price=="$0"? 
                            <li class="text-muted"><span class="fa-li"><i className="fa fa-times"></i></span>{this.props.list7}</li>:
                            <li><span class="fa-li"><i className="fa fa-check"></i></span>{this.props.price=="$49"?<span><b>{this.props.list7.slice(0,9)}</b>{this.props.list7.slice(9,25)}</span>:`${this.props.list7}`}</li>}

                            {this.props.price=="$49"?
                             <li><span  class="fa-li"><i className="fa fa-check"></i></span>{this.props.list8}</li>:
                            <li class="text-muted"><span class="fa-li"><i className="fa fa-times"></i></span>{this.props.list8}</li>}
                            
                            
                        </ul>
                        <div class="d-grid">
                            <a href="#" class="btn btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                </div>
            </div>
                    
        )
    } 
}
export default User;