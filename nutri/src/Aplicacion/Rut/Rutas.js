import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Iniciativa from '../Diseño/Iniciativa'
import MasIniciativa from '../MasIniciativa'


import Galletas from '../Link producto/Galletas'
import Sabritas from '../Diseño/Sabritas'
import Refrescos from '../Diseño/Refrescos'
import Infoponch from './Infosponch'
import Infochokis from './Infochokis'
import Infoempe from './Infoempe';



function Rutas() {
    return (
        <Routes>
            <Route path='/iniciativa' element = {<Iniciativa/>} />
            <Route path='/mas' element = {<MasIniciativa/>}/>
            <Route path='/galleta' element = {<Galletas/>}/>
            <Route path='/sabrita' element = {<Sabritas/>}/>
            <Route path='/refresco' element = {<Refrescos/>} />
            <Route path='/sponch' element = {<Infoponch/>} />
            <Route path='/choki' element = {<Infochokis/>} />
            <Route path='/empe' element = {<Infoempe/>} />

        </Routes>
    )
}

export default Rutas