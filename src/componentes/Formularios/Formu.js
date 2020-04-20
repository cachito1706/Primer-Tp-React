import React from 'react'
import './Formu.css'


class Formu extends React.Component{
    
    EnviandoDatos = (event) =>{
        event.preventDefault()
        const Nombre = event.target[0].value
        const email = event.target[1].value 
        
        this.props.onSend({Nombre,email})

    } 



render(){
    const Cerveza = this.props.listCerveza 
    console.log(Cerveza);
    return(
        
            
            <form class="form-group formPricipal" onSubmit={this.EnviandoDatos}>
                <div class="form-group">
                      <label for="exampleInputEmail1">Nombre</label><br></br>
                <input class="form-control"  type="text"
                 placeholder="Ingrese su Nombre"
                > 
                </input>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Seleccione Cerveza</label>
                    <select class="form-control" id="exampleFormControlSelect1">  
                     {/* Cerveza.Children.map((Cerveza) => {
                            <option  value={Cerveza.name}>{Cerveza.name}</option> 
                    })  */}
                        <option>{this.props.listCerveza[0].name}</option> 
                  </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label><br></br>
                <input class="form-control"  type="email"
                 placeholder="Ingrese su Email"
                > 
                </input><br></br>
                </div>
                
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

   )
}
   
}

export default Formu 