import React, { Component } from 'react'

import CuerpoPrincipalPadre from './componentes/CuerpoPrincipalPadre'
import Footer from './componentes/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './componentes/CuerpoPrincipal/CuerpoPrincipal.css'

// Importando imagenes 




class App extends Component {
    

  
    render() {
     
        return (
            <div className="container-fluid" >
                <div className="row">
                     <CuerpoPrincipalPadre></CuerpoPrincipalPadre>
                </div>
                {/* <div class="row">
                     <Footer></Footer>
                </div> */}
            </div>


        )
    }

}

export default App 