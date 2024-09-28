import React, { Component } from "react";
export default class Uprbody extends Component{
    render() {
        return(
            <div id="upper-container">
                <div id="left">
                    <p id="start">Start your BK® order.</p>
                    <div id="pickUp"><button className="btn pickDel">Order Pickup</button></div>
                    <div id="delivery"><button className="pickDel">Order Delivery</button></div>
                </div>
                <div id="right">
                    <img id='imgEffect' src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/abe90c6f781580dcf7622b9497663d510c3398d5-600x338.gif?w=1125&q=90&fit=max&auto=format" alt="" />
                </div>
            </div>
        )
    }
}