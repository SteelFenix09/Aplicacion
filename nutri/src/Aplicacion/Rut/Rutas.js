import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Iniciativa from '../Diseño/Iniciativa'
import MasIniciativa from '../MasIniciativa'

import Sabritas from '../Diseño/Sabritas'
import Galletas from './../Link producto/Galletas'
import Refrescos from '../Link producto/Refrescos'

import Infochokis from './Infochokis'
import Infoempe from './Infoempe'
import Infoponch from './Infosponch'


import Menu from '../Menu'

import Rufles from '../Diseño/InfoSabritas/Rufles'
import Torci from '../Diseño/InfoSabritas/Torci'
import Pizz from '../Diseño/InfoSabritas/Pizz'



import Arizona from '../Diseño/InfoRefrescos/Arizona'

import ListaProductos from '../ListaProductos'


function Rutas() {
    return (
        <div>
            <Menu/>
            <Routes> {/* BrowserRouter eliminado */}
                <Route path='/iniciativa' element={<Iniciativa />} />
                <Route path='/mas' element={<MasIniciativa />} />


                {/* <Route path='/galleta' element={<Galletas />} /> */}
                <Route path='/sabrita' element={<Sabritas />} />
                <Route path='/bebidas' element={<Refrescos />} />


                <Route path='/pizz' element={<Pizz />} />
                <Route path='/rufles' element={<Rufles />} />
                <Route path='/torciditos' element={<Torci />} />

                <Route path='/arizona' element={<Arizona />} />



                <Route path='/galleta' element={<Galletas />} />
                <Route path='/sponch' element={<Infoponch />} />
                <Route path='/choki' element={<Infochokis />} />
                <Route path='/empe' element={<Infoempe />} />


                
                <Route path='/refrescos' element={<Sabritas />} />
                <Route path='/refrescos' element={<Refrescos />} />

                <Route path='/datos' element={<ListaProductos />} />


            </Routes>
        </div>
    )
}

export default Rutas