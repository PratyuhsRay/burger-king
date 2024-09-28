import React,{Component} from "react";
export default class Lwrbody extends Component{
    render() {
        return(
            <>
            <div className="mainbottom" style={{backgroundColor:'#ddd4c6', display:'flex', margin:'180px 0 0 0'}}>
                <div style={{margin:'0 0 0 200px'}} className="leftbottom">
                    <img style={{width:'473.45px', height:'431.2px', margin:'-50px 0 0 0'}} src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/da421b826216c29608a2694126a5095f17be8676-630x622.png?w=1125&q=80&fit=max&auto=format" alt="" />
                </div>
                <div className="rightbottom" style={{margin:'40px 0 0 50px'}}>
                    <h1 style={{fontSize:'48px', color:'rgb(57, 38, 38)'}}> Save $$$ <br /> With offers on demand</h1>
                    <button className="bottombtn">Download on the <br /> AppStore</button>
                    <button className="bottombtn">Get in on  <br />Googlepay</button>
                    <p style={{color:'rgb(57, 38, 38)'}}>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other <br /> countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. <br /> Terms apply.</p>
                </div>
            </div>
            <div id="label">
                <h6>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved. | <a style={{color:'white'}} href="">Do Not Sell Or Share My Personal Information</a></h6>
            </div>
            </>
        )
    }
}