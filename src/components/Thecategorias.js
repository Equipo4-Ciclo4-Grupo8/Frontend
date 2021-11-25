import React from 'react';
import PropTypes from 'prop-types';
import './Thecategorias.css'
import { Categorias } from '../Data/DataServicios';
import {Link} from "react-router-dom"


const Thecategorias = props => {
  const categorias = Categorias()

  // const categorias= [
  //     {
  //       foto: "https://placeimg.com/220/220/people",
  //       nombre:"Tutores academicos",
  //       descripcion:"Encuentre tutores en temas de Idiomas, Matematicas, Escritura, Programacion y        mucho mas"}
  //   }
  //   ]


 const ciclarCategorias = categorias.map((item, index) => {
  //props.onclic
  return (
    <div key={index} className="card-user">
      <div className="card-foto">
       
        <Link to="/servicios" > <img  src={item.foto} alt="foto" title="Dar Click" 
        onClick={()=>props.onClick(index)} /> </Link> 
        
      </div>

      <div className="card-name">
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}  </p>
      </div>

    </div>

  )
 });


  return (
    ciclarCategorias
    

  )
};


Thecategorias.propTypes = {
  //categorias: PropTypes.object.isRequired //nota: agregar el tema de proptypes.sharp, para entrar dentro del objeto y definir los tipos de variables
};

Thecategorias.defaultProps = {

}


export default Thecategorias



