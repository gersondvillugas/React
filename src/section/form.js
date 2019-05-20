import React, {Component} from 'react'
export default class Forms extends Component{
    constructor(){
        super()
        this.state={
            inputCorreo:'@',
            inputPassword:''
        }
    } 
    handleSubmit=(e)=>{
        //evento para evitar que el boton haga submit
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return(
         <div>
            <h4> Formulario</h4>
                <form  onSubmit={this.handleSubmit}>
               
                <p> 
                 
                      <input
                       style={{color:'#020B12',width:300,height:40}}
                      type="email"
                   //   id='name'  <label htmlFor='correoelectronico'>Correoele ELectronico:</label>
                      name='correo'
                      onChange={e=>this.setState({inputCorreo:e.target.value})}
                      placeholder='Introduce el correo electronico'
                   //   ref={inputElement=>this.inputName=inputElement}
                   //   value={this.state.inputName}
                    />  
  
                 </p>   
                 <br/>    
                 <p>
                   
                   <input
                          style={{color:'#020B12',width:300,height:40}}
                      type="password"
                     // id='facebook'
                      name='contraseña'
                     onChange={e=>this.setState({inputPassword:e.target.value})}
                      placeholder='Introduce tu constraseña'
                    //  value={this.state.inputTwitter}
                    />  

                 </p>
                  
                 <br/>
                    <p>
                    <button style={{background:'#22699E',width:350,height:30}}> Iniciar Secion </button>
    


                    </p> 
                           
                    
                
                </form>
  
  
             </div>
  
  
        )
  
        
    }
}
