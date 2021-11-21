import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Footer from './componentes/Footer';
import Navegacion from './componentes/Navegacion';
import Login from './componentes/Login';
import Thecategorias from './componentes/Thecategorias';
import ServiciosOfertados from './componentes/ServiciosOfertados';
import { categorias } from './Data/DataServicios';

function App() {

  const [nombreCategoria, setnombreCategoria] = useState()

  console.log(nombreCategoria)
    const handleCategorias = (index)=>{
      setnombreCategoria(categorias[index].categoria.nombre)
      }
  return (
    <Router>
      <Navegacion/>
      <Route path='/' exact component={Login}/>
      <br/>
      <br/>
      <br/>
      <br/>
      

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
    
    <Footer/>
    
    </Router>
  );
}

export default App;
