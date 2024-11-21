import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Iniciativa from '../Diseño/Iniciativa'
import MasIniciativa from '../MasIniciativa'
import NutrionsFacts from '../Diseño/NutrionsFacts'



import Galletas from '../Diseño/Galletas'
import Sabritas from '../Diseño/Sabritas'
import Refrescos from '../Link producto/Refrescos'

import Menu from '../Menu'
import Footer from '../Footer'

import Rufles from '../Diseño/InfoSabritas/Rufles'
import Torci from '../Diseño/InfoSabritas/Torci'
import Pizz from '../Diseño/InfoSabritas/Pizz'


import Jumex from '../Diseño/InfoRefrescos/Jumex'
import Pepsi from '../Diseño/InfoRefrescos/Pepsi'
import Sprite from '../Diseño/InfoRefrescos/Sprite'


function Rutas() {
    return (
        <div>
            <Menu />
            <Routes> {/* BrowserRouter eliminado */}
                <Route path='/iniciativa' element={<Iniciativa />} />
                <Route path='/mas' element={<MasIniciativa />} />
                <Route path='/Nosotros' element={<NutrionsFacts />} />


                <Route path='/galleta' element={<Galletas />} />
                <Route path='/sabrita' element={<Sabritas />} />
                <Route path='/bebidas' element={<Refrescos />} />


                <Route path='/pizz' element={<Pizz />} />
                <Route path='/rufles' element={<Rufles />} />
                <Route path='/torciditos' element={<Torci />} />

                <Route path='/jumex' element={<Jumex />} />
                <Route path='/pepsi' element={<Pepsi />} />
                <Route path='/sprite' element={<Sprite />} />


                
                <Route path='/refrescos' element={<Sabritas />} />
                <Route path='/refrescos' element={<Refrescos />} />
                <Route path='/refrescos' element={<Galletas />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Rutas