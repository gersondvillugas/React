import React,{Component} from 'react';
import './App.css';
import {Title} from './components/Title'
import Forms from './section/form'
import Forms2 from './section/form2'

import 'bulma/css/bulma.css'
import { decorator } from '@babel/types';

const Login =({handlerChangeMode})=>(
  
  <div>
       <Forms />
   <br/>
  
    <span onClick={()=>handlerChangeMode(false)}  style={{color:'red',textDecoration:'underline red' }}>  Registro</span>
    </div>
               
)
const Registro =({handlerChangeMode})=>(
          
      <div>
      
        <Forms2/>
        <br/>

      
     <span onClick={()=>handlerChangeMode(true)} style={{color:'orange',textDecoration:'underline red'}} >  Ya tengo una cuenta</span>

        </div>

)
  

class App extends Component {
  
  constructor(){
    super()
    this.state={Loginmode:true}
}
handlerChangeMode=(node)=>{
  this.setState({
    Loginmode:node
  })
}
  render(){
  return (
    
    <div className="App" >
     
   <Title> Login with React </Title>

   {this.state.Loginmode
        ?<Login handlerChangeMode={this.handlerChangeMode}/>
        :<Registro handlerChangeMode={this.handlerChangeMode}/>
       }
    </div>
  );
  }
}

export default App;
