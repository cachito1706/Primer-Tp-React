import React from 'react'
import './CuerpoPrincipal.css'
import Example from './../ModalGrafica/Example'


class CuerpoPrincipal extends React.Component {

    state = {
        cantidad: 0
    }
    estructura = {

        cantidad: "Cantidad",
        precio: "Precio",
        total: "Total"

    }

    agregar = () => {
        this.setState({ cantidad: this.state.cantidad + 1 })

    }
    restar = () => {
        if (this.state.cantidad > 0) {
            this.setState({ cantidad: this.state.cantidad - 1 })
        } else {
            alert("No puede ser menor a 0 ")
        }
    }

    limpiar = () => {
        this.setState({ cantidad: 0 })

    }


    render() {
        
        const itemPrecio = this.props.price > 20 
        const clasesHeaderActiva = itemPrecio ? 'headerCard-activa' : ''
        const clasesHeader = `headerCard ${clasesHeaderActiva}`
        const {name,precio,Imagen,Ingredientes} = this.props.cerveza
       


        return (
            
              
                <div class="card text-black sm-3 comprador" >
                    <div class={clasesHeader}><h4 className="TitleCards">{name}</h4></div>
                    <div class="card-body">
                        <div className="row">
                            <div class="col-sm-12">
                                <img  class="card-img-bottom" width="250" height="250" src={Imagen}></img>
                            </div>
                            <div className="col-sm-6 comprador">
                                <h5>{this.estructura.cantidad} : {this.state.cantidad}</h5>
                            </div>
                            <div className="col-sm-6 comprador" >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <button className="btn btn-secondary" onClick={this.agregar}>+</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button className="btn btn-secondary" onClick={this.restar}>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 comprador" >
                                <h5>{this.estructura.precio}: ${precio}</h5>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-sm-12 bodyTotal" >
                                    <h5>{this.estructura.total}: ${precio*this.state.cantidad}</h5>
                                </div>
                            </div>
                    </div>
                    <div class="card-footer col text-center">
                        <div className="row text-center">
                            <div class="col-sm-6">
                                <button className="btn btn-secondary" onClick={this.limpiar}> Limpiar Cantidad</button>
                            </div>
                            <div class="col-sm-6" >
                                 <Example cerveza={this.props.cerveza}></Example>
                            </div>
                           
                        </div>
                    </div>
                </div>    
        )
    }
}

export default CuerpoPrincipal