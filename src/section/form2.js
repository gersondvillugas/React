import React, {Component} from 'react'
//import Forms from './form'

export default class Forms2 extends Component{
    constructor(){
        super()
        this.state={
            inputName:'',
            inputCorreo:'@'
        }
    } 
    render(){
        return(
         <div>
            <h4> Formulario</h4>
            <form >
                    
                    <p> 
                          <input
                             style={{color:'#000',width:300,height:40}}

                       //   id='name'
                          name='Usuario'
                         // onChange={e=>this.setState({inputName:e.target.value})}
                          placeholder='Introduce de usuario'
                       //   ref={inputElement=>this.inputName=inputElement}
                       //   value={this.state.inputName}
                        />  
      
                     </p>       
                     <br/>
                     <p>
                       <input
                         style={{color:'#000',width:300,height:40}}

                          type="email"
                         // id='facebook'
                          name='correo'
                         // onChange={e=>this.setState({inputTwitter:e.target.value})}
      
                          placeholder='Introduce tu correo'
                        //  value={this.state.inputTwitter}
                        /> 
                        </p> 
                        <br/>
                    <p>
                        <input
                          style={{color:'#000',width:300,height:40}}

                         name='sexo'
                        placeholder="sexo"
                        />
                    </p>
                    <br/>
                    <p>

                        <input
                         style={{color:'#000',width:300,height:40}}

                        type="date"
                         name='Fecha de nacimiento'
                        placeholder="Fecha de nacimiento"
                        />
                    </p>
                    <br/>
                    <p>
                        <input
                         style={{color:'#000',width:300,height:40}}

                         type='password'
                         name='contraseña'
                        placeholder="Contraseña"
                        />
                    </p>
                    <br/>
                    <p>
                        <input
                         style={{color:'#000',width:300,height:40}}
                         type='password'
                         name='ccontraseña'
                        placeholder="Confirmar Contraseña"
                        />
                    </p>
                        
                    <br/>
                    <p>
                    <button style={{background:'#22699E',width:350,height:30}}> Registrar </button>
    


                    </p> 
                           
                        
                      
                          
                        
                               
                        
                    
                    </form>
             </div>
  
  
        )
  
        
    }
}
