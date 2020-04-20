import React from 'react'
import CuerpoPrincipal from  './../CuerpoPrincipal/CuerpoPrincipal'
import Formu from './../Formularios/Formu'
import HeaderPrincipaL from './../HeaderPricipal/HeaderPrincipaL'
import CervezaNegra from './../../Img/cervezaNegra.jpg' 
import CervezaRoja from './../../Img/CervezaRoja.jpg'
import CervezaRubia from './../../Img/CervezaRubia.jpg'
import CervezaIpa from './../../Img/CervezaIpa.jpg'

class CuerpoPrincipalPadre extends React.Component {

    constructor() {
        super()
    }
    state = {
        filter: "",
        copyCerveza : [],
        Cerveza: [{
            id: 1,
            name: 'Cerveza Negra',
            precio: 90,
            Imagen: CervezaNegra,
            Ingredientes:{
                Alcohol : 70, 
                maiz : 20,
                pulpa:20 
            }
        },
        {
            id: 2,
            name: 'Cerveza Roja',
            precio: 95,
            Imagen: CervezaRoja,
            Ingredientes:{
                Alcohol : 70, 
                maiz : 20,
                pulpa:20 
            }
        },
        {
            id: 3,
            name: 'Cerveza Rubia',
            precio: 90,
            Imagen: CervezaRubia,
            Ingredientes:{
                Alcohol : 70, 
                maiz : 20,
                pulpa:20 
            }
        }, {
            id: 4,
            name: 'Cerveza Ipa',
            precio: 90,
            Imagen: CervezaIpa,
            Ingredientes:{
                Alcohol : 70, 
                maiz : 20,
                pulpa:20 
            }
        }
        ]
    }
   
    initCerveza =()=>{

        this.setState({copyCerveza : this.state.Cerveza})

    }


    handleChange = (valorInput) => {
        if(valorInput===''){
         this.initCerveza();
        }else{     
        this.setState({ filter: valorInput});
        const cervezaFiltrada = this.state.Cerveza.filter(elem=>{
            return elem.name.toLowerCase().indexOf(valorInput) > -1;
        })
        this.setState({copyCerveza : cervezaFiltrada});
      };
    }
    componentDidMount() {

       this.initCerveza();
        }


    render() {
        
        return (

        <div className="container-fluid">
                <HeaderPrincipaL handleChange={this.handleChange}></HeaderPrincipaL>
                            <div className="row">


                                {this.state.copyCerveza.map(CervezaItem  => {
                                    return (
                                        <div className="col-sm-3">
                                            {/* <CuerpoPrincipal key={CervezaItem.id}  name={CervezaItem.name} price={CervezaItem.precio} imagen={CervezaItem.Imagen} Ingredientes={CervezaItem.Ingredientes}/> */}
                                            <CuerpoPrincipal key={CervezaItem.id} cerveza={CervezaItem} />
                                        </div>
                                    )
                                })}
      {/* <Formu  listCerveza={this.state.Cerveza}></Formu> */}
                           </div>
        </div>
        )



    }

}

export default CuerpoPrincipalPadre