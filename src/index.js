import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Thecategorias from './components/Thecategorias';
// import ServiciosOfertados from './components/ServiciosOfertados';
// import { categorias } from './Data/DataServicios';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import { App } from './App';
import {BrowserRouter} from "react-router-dom"

//  const ConectorCategoriasServicios =  (props) => {
  
//    const [nombreCategoria, setnombreCategoria] = useState("kkk")
//    console.log(nombreCategoria)
//    const handleCategorias = (index)=>{
//      setnombreCategoria(categorias[index].categoria.nombre)
    
//   } 

//   return(
//    <Router>
//    <div className="seccion-categorias"> 
//    <Thecategorias onClick={(index)=>handleCategorias(index)}/>
//    </div>

   
//    {/* <Route path="/servicios" render={() => <div className="seccion-servicios">  <ServiciosOfertados nombreCategoria={nombreCategoria}  /> </div> } />  */}
//    <Route path='/servicios' exact component={Thecategorias}/>

   
   
//    </Router>
   
//    )
//  };

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
