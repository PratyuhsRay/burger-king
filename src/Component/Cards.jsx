import React,{Component} from "react";

export default class Cards extends Component {
    render(){
        return(
            <div style={{backgroundColor:'white',borderRadius:'20px', position:'relative', width:'580px', height:'520px'}}>
                <img src={this.props.imgSrc} alt={this.props.alt} style={{width:'580px', height:'290px', borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}}></img>
                <h2 style={{ margin:'15px 0 0 15px'}}>{this.props.heading}</h2>
                <para style={{width:'500px', margin:'15px 0 0 15px', position:'absolute'}}>{this.props.para}</para><br></br>
                <a href='' style={{top:'420px', left:'15px', position:'absolute'}}>{this.props.term}</a>
                <button style={{position:'absolute', left:'420px', bottom:'20px', height:'40px', width:'120px',color:'orangered', borderRadius:'30px', border:'1px solid orangered', backgroundColor:'white'}}>{this.props.btn}</button>
            </div>
        )
    }
}