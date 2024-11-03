import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './Aplicacion/Menu';
import Rutas from './Aplicacion/Rut/Rutas';

function App() {
  return (
    <>
    <Router>
      <div className='container-fluid'>
        <Menu/>
        <Rutas/>
      </div>
    </Router>
    </>
  );
}

export default App;
