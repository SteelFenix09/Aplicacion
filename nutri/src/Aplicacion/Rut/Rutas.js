import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Iniciativa from '../Diseño/Iniciativa'
import MasIniciativa from '../MasIniciativa'


function Rutas() {
    return (
        <Routes>
            <Route path='/iniciativa' element = {<Iniciativa/>} />
            <Route path='/mas' element = {<MasIniciativa/>}/>
        </Routes>
    )
}

export default Rutas