import React from 'react';
import PropTypes from 'prop-types';
import './Thecategorias.css'

const Thecategorias =  props => {

    // const categorias= {
    //     categoria1:{
    //       foto: "https://placeimg.com/220/220/people",
    //       nombre:"Tutores academicos",
    //       descripcion:"Encuentre tutores en temas de Idiomas, Matematicas, Escritura, Programacion y mucho mas"
    //     },
    //     categoria2:{
    //         foto: "https://placeimg.com/220/220/people",
    //         nombre:"Tecnicos",
    //         descripcion:"Encuentre Tecnicos expertos en Computadores, celulares, sistemas electricos, y mucho mas"
    //       },
    //   }
      
        return(
          <div className="card-user">
            <div className="card-foto">
                <img src={props.categoria.foto} alt="foto"/>
            </div>
    
            <div className="card-name">
                <h2>{props.categoria.nombre}</h2>
                <p>{props.categoria.descripcion}  </p>
          </div>

          </div>
      
        )
      };

      
Thecategorias.propTypes={
    categoria: PropTypes.object.isRequired //nota: agregar el tema de proptypes.sharp, para entrar dentro del objeto y definir los tipos de variables
};

Thecategorias.defaultProps={

}
      

export default Thecategorias



