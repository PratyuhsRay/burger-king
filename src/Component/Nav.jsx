import React,{Component} from "react";
export default class Nav extends Component{
    render(){
        return(
            <div id="header">
                <div id="menu"></div>
                <div id="logo"><h1>BURGER KING</h1></div>
                <div id="cartBtn"><button className="btn">View Cart</button></div>
            </div>
        )
    }
}