import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Rutas from './Aplicacion/Rut/Rutas';

function App() {
  return (
    <>
    <Router>
      <div className='container-fluid'>
        <Rutas/>
      </div>
    </Router>
    </>
  );
}

export default App;
