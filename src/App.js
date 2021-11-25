import React, {useState} from 'react'
// import ReactDOM from 'react-dom';
import {Link, Route, Switch} from "react-router-dom"
import './index.css';

// import reportWebVitals from './reportWebVitals';
import Thecategorias from './components/Thecategorias';
import ServiciosOfertados from './components/ServiciosOfertados';
import { Categorias } from './Data/DataServicios';
import VerCategorias from './components/VerCategorias';





export const App = () => {

  const categorias = Categorias()

  const [nombreCategoria, setnombreCategoria] = useState()

  console.log(nombreCategoria)
    const handleCategorias = (index)=>{
      setnombreCategoria(categorias[index].nombre)
      }

    
 
   return(
   
    <>
    <Route exact path="/">
    <div className="seccion-categorias"> 
    <Thecategorias onClick={(index)=>handleCategorias(index)}/>
    </div>
    </Route>
    
    <Route path= "/servicios">
    <div className="seccion-servicios">  
    
    <ServiciosOfertados nombreCategoria={nombreCategoria}  />
    </div>
    </Route>

    <Route path= "/vercategorias">
    <VerCategorias  />
    </Route>
    </>
    
    )
  };







