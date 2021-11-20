import React from 'react';
import PropTypes from 'prop-types';
import './Thecategorias.css'
import { categorias } from '../Data/DataServicios';
import {Link} from "react-router-dom"


const Thecategorias = props => {

  // const categorias= [
  //     {categoria:{
  //       foto: "https://placeimg.com/220/220/people",
  //       nombre:"Tutores academicos",
  //       descripcion:"Encuentre tutores en temas de Idiomas, Matematicas, Escritura, Programacion y        mucho mas"}
  //   }
  //   ]
//  const [nombreCategoria, setnombreCategoria] = useState("kkk")
//  const handleCategorias = (index)=>{
//    setnombreCategoria(categorias[index].categoria.nombre)}

 const ciclarCategorias = categorias.map((item, index) => {
  //props.onclic
  return (
    <div key={index} className="card-user">
      <div className="card-foto">
       
        <Link to="/servicios" > <img  src={item.categoria.foto} alt="foto" title="Dar Click" 
        onClick={()=>props.onClick(index)} /> </Link> 
        
      </div>

      <div className="card-name">
        <h2>{item.categoria.nombre}</h2>
        <p>{item.categoria.descripcion}  </p>
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



