import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Iniciativa from '../Diseño/Iniciativa'


function Rutas() {
    return (
        <Routes>
            <Route path='/iniciativa' element = {<Iniciativa/>} />
        </Routes>
    )
}

export default Rutas