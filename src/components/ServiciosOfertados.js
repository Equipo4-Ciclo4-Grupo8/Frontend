import React from 'react';
import PropTypes from 'prop-types';
import './ServiciosOfertados.css'
import { servicios } from '../Data/DataServicios';



const ServiciosOfertados =  props => {

  // const servicios= [
  //   {servicio:{
  //     foto: "https://placeimg.com/220/220/people",
  //     nombre:"Santiago Gordillo",
  //     profesion:"Profesor de francés",
  //     precio: 60000 , // si aplica o no
  //     calificacion: "8/10",
  //     categoria: "Tutores académicos",
  //     celular: 666666,
  //     correo: "@hotmail.com",
  //     disponibilidadTiempo:"",
  //     ciudad: "",
  //     añosExperiencia: "",
  //     fotosExperiencia:""
  //     }},

  
    const servicioAMostrar = servicios.filter((item)=>
      item.servicio.categoria === props.nombreCategoria
    );//filtro para solo mostrar segun categoria

    const ciclarServicios = servicioAMostrar.map((item, index) => {
      
        return (
 
          <div key={index} className="card-servicio">
             <div className="foto-perfil">
                 <img src={item.servicio.foto} alt="foto"/>
                  
             </div>
      
             <div className="card-descripcion">
                 <h3>{item.servicio.nombre}</h3>
                 <h2 className="profesion">{item.servicio.profesion} </h2>
                 <h3> $|Hora: {item.servicio.precio} COP </h3>
                 <p>Calificación : {item.servicio.calificacion}</p>
             </div>
  
           </div>
        )
      
      
        });
      
        return(
        
          ciclarServicios
      
        )
      };

      
ServiciosOfertados.propTypes={
    //servicio: PropTypes.object.isRequired //nota: agregar el tema de proptypes.sharp, para entrar dentro del objeto y definir los tipos de variables
};

ServiciosOfertados.defaultProps={

}
      

export default ServiciosOfertados