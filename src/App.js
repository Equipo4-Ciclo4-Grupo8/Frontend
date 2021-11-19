import React, {useState} from 'react'
// import ReactDOM from 'react-dom';
import {Link, Route, Switch} from "react-router-dom"
import './index.css';

// import reportWebVitals from './reportWebVitals';
import Thecategorias from './components/Thecategorias';
import ServiciosOfertados from './components/ServiciosOfertados';
import { categorias } from './Data/DataServicios';




export const App = () => {
  const [nombreCategoria, setnombreCategoria] = useState()

  console.log(nombreCategoria)
    const handleCategorias = (index)=>{
      setnombreCategoria(categorias[index].categoria.nombre)
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
    </>
    
    )
  };







