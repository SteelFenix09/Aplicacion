import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Iniciativa from '../Diseño/Iniciativa'
import MasIniciativa from '../MasIniciativa'


import Galletas from '../Diseño/Galletas'
import Sabritas from '../Diseño/Sabritas'
import Refrescos from '../Diseño/Refrescos'


function Rutas() {
    return (
        <Routes>
            <Route path='/iniciativa' element = {<Iniciativa/>} />
            <Route path='/mas' element = {<MasIniciativa/>}/>
            <Route path='/galleta' element = {<Galletas/>}/>
            <Route path='/sabrita' element = {<Sabritas/>}/>
            <Route path='/refresco' element = {<Refrescos/>} />
        </Routes>
    )
}

export default Rutas