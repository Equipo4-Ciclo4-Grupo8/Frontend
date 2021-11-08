import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Thecategorias from './components/Thecategorias';
import ServiciosOfertados from './components/ServiciosOfertados';

//data a usar seccion categorias
const categorias= {
  categoria1:{
    foto: "https://i.ibb.co/2Pxd5G0/tutores.png",
    nombre:"Tutores académicos",
    descripcion:"Idiomas, Matemáticas, Escritura, Programación"
  },
  categoria2:{
      foto: "https://i.ibb.co/WHJxCvs/tecnicos.png",
      nombre:"Técnicos",
      descripcion:"Computadores, celulares, sistemas eléctricos,"
    },
}
//data a usar seccion servicios ofertados
const servicios= {
  servicio1:{
    foto: "https://placeimg.com/220/220/people",
    nombre:"Santiago Martinez",
    profesion:"Profesor de francés",
    precio: 60000 , // si aplica
    calificacion: "8/10",
    categoria: "Tutores académicos"
    },
  servicio2:{
    foto: "https://placeimg.com/220/220/people",
    nombre:"Juan Pelaez",
    profesion: "Profesor de ingles",
    precio: 50000 , // si aplica 
    calificacion: "6/10",
    categoria: "Tutores académicos"
  
      },
  servicio3:{
    foto: "https://placeimg.com/220/220/people",
    nombre:"Daniel Felipe Echevarria Gonzales",
    profesion: "Experto Excel",
    precio: 20000 , // si aplica 
    calificacion: "9/10",
    categoria: "Tutores académicos"
      
      }, 

  }


ReactDOM.render(
  <React.StrictMode>
    
    <div className="seccion-categorias"> 

    <Thecategorias categoria={categorias.categoria1}/>
    <Thecategorias categoria={categorias.categoria2}/>
    <Thecategorias categoria={categorias.categoria1}/>
    <Thecategorias categoria={categorias.categoria2}/>
    <Thecategorias categoria={categorias.categoria1}/>
    <Thecategorias categoria={categorias.categoria2}/>
    <Thecategorias categoria={categorias.categoria2}/>

    
    </div>
    <div className="seccion-servicios">
    <ServiciosOfertados servicio={servicios.servicio1}/>
    <ServiciosOfertados servicio={servicios.servicio2}/>
    <ServiciosOfertados servicio={servicios.servicio3}/>
    <ServiciosOfertados servicio={servicios.servicio2}/>
    <ServiciosOfertados servicio={servicios.servicio1}/>
    <ServiciosOfertados servicio={servicios.servicio3}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
