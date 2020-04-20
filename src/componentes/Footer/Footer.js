import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer =()=>{
    
  return (
    <div class="container-fluid">
        <div class="row text-center text-xs-center text-sm-left text-md-left">
            <div class="col-xs-12 col-sm-6 col-md-6 text-center">
                <h5> Links del Sitio </h5>
                <ul class="list-unstyled quick-links">
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Estilos</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Videos</a></li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 text-center ">
                <h5>Paginas Amigas</h5>
                <ul class="list-unstyled quick-links text-center">
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Cerveceria Antares</a></li>
                    <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Cerveceria Patagonia</a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul class="list-unstyled list-inline social text-center">
                    <li class="list-inline-item"><a><FontAwesomeIcon icon={faBeer}/></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a><i class="fa fa-google-plus"></i></a></li>
                    <li class="list-inline-item"><a  target="_blank"><i class="fa fa-envelope"></i></a></li>
                </ul>
            </div>
          
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p><u><a href="https://www.nationaltransaction.com/">Compania de Productos Artesanales</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                <p class="h6">&Derechos Reservados.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Cerveceria-Kolla</a></p>
            </div>   
        </div>
 </div>
  );
}

export default Footer