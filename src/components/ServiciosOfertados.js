import React from 'react';
import PropTypes from 'prop-types';
import './ServiciosOfertados.css'

const ServiciosOfertados =  props => {

    // const servicios= {
    //     servicio1:{
    //       foto: "https://placeimg.com/220/220/people",
    //       nombre:"Santiago",
    //       profesion:"Profesor de frances",
    //       precioxHora: 60000 // si aplica
    //       calificacion: 8/10
    //     },
    //     servicio2:{
    //       foto: "https://placeimg.com/220/220/people",
    //       nombre:"Juan ",
    //       profesion: "profesor de ingles"
    //       precio: 50000 // si aplica
    //       calificacion: 6/10
    //   
    //       },
    //   }
      
        return(
          <div className="card-servicio">
            <div className="foto-perfil">
                <img src={props.servicio.foto} alt="foto"/>
                
            </div>
    
            <div className="card-descripcion">
                <h3>{props.servicio.nombre}</h3>
                <h2 className="profesion">{props.servicio.profesion} </h2>
                <h3> $|Hora: {props.servicio.precio} COP </h3>
                <p>Calificación : {props.servicio.calificacion}</p>
          </div>

          </div>
      
        )
      };

      
ServiciosOfertados.propTypes={
    servicio: PropTypes.object.isRequired //nota: agregar el tema de proptypes.sharp, para entrar dentro del objeto y definir los tipos de variables
};

ServiciosOfertados.defaultProps={

}
      

export default ServiciosOfertados