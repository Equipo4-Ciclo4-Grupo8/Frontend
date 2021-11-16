import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './componentes/Footer';
import Navegacion from './componentes/Navegacion';
import Login from './componentes/Login';

function App() {
  return (
    <Router>
      <Navegacion/>
      <Route path='/' exact component={Login}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    
    </Router>
  );
}

export default App;
