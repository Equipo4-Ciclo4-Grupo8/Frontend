import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navegacion from './components/Navegacion';
import Login from './components/Login';
import Pendon from './components/Pendon';
import SupBarra from './components/SupBarra';
import RegistroProv from './components/RegistroProv';
import ViewLogin from './components/ViewLogin';

function App() {
  return (
    <Router>
      <SupBarra/>
      <Pendon/>
      <Route path='/Login' exact component={Login}/>
      <br/>
      <Route path='/RegistroProv' exact component={RegistroProv}/>
      <br/>
      <Route path='/ViewLogin' exact component={ViewLogin}/>
      <br/>
      <br/>
      <Footer/>
    
    </Router>
  );
}

export default App;
