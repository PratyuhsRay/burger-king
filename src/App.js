import React,{Component} from 'react';
import './App.css';
import Nav from './Component/Nav';
import Uprbody from './Component/Uprbody';
import Cards from './Component/Cards';
import arrData from './Component/Data';
import Lwrbody from './Component/Lwrbody';
import Footer from './Component/Footer';
export default class App extends Component {
constructor(props) {
  super(props)
}
render(){
  return(
    <div>
      <Nav/>
      <Uprbody/>
      <div style={{display:'flex', flexWrap:'wrap', margin:'0 0 0 200px', gap:'30px'}}>
        {arrData.map(x=>{
          return(
            <Cards imgSrc={x.imgSrc} alt={x.alt} heading={x.heading} para={x.para} term={x.term} btn={x.btn}/>
          )
        })}
      </div>
      <Lwrbody/>
      <Footer/>
    </div>
  )
}}

