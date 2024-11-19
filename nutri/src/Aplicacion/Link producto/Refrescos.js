import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { useSearchParams } from 'react-router-dom'




import './../Diseño/img/Refrescos/refrs.css'

import Jumex from'./../Diseño/img/Refrescos/Nutri10.png'
import Sprite from './../Diseño/img/Refrescos/Nutri7.png'
import Pepsi from './../Diseño/img/Refrescos/Nutri8.png'





function Refrescos() {

    const [buscarParams] = useSearchParams();
    const buscaTexto = buscarParams.get('search') || '';
    const [localTexto, setLocalTexto] = useState(buscaTexto)

    const soda = [{
        nombre:  'Jumex Durazno',
        descripcion: '...',
        imagen: <img src={Jumex} id='jumex' />,
        direcion: <li class="buton"><Link class="buton" to="/jumex">Mas informacion...</Link></li>
    },
    {
        nombre: 'Sprite',
        descripcion: '...',
        imagen: <img src={Sprite} id='sprite' />,
        direcion: <li class="buton"><Link class="buton" to="/sprite">Mas informacion...</Link></li>
    },
    {
        nombre: 'Pepsi',
        descripcion: '...',
        imagen: <img src={Pepsi} id='pepsi' />,
        direcion: <li class="buton"><Link class="buton" to="/pepsi">Mas informacion...</Link></li>
    },
    ]

    const filtrar = localTexto ? soda.filter((pro) => pro.nombre.toLowerCase().includes(localTexto.toLowerCase())) : soda

    const buscador = (e) =>{setLocalTexto(e.target.value)}


    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <table>
                <tbody> 
                    <tr>
                        {filtrar.map((pro, index) => (
                            <td key={index}> {pro.imagen} </td>
                        ))}
                    </tr>
                    <tr>
                        {filtrar.map((pro, index) => (
                            <td key={index}>{pro.nombre}</td>
                        ))}
                    </tr>
                    <tr>
                        {filtrar.map((pro, index) => (
                            <td key={index}>{pro.descripcion}</td>
                        ))}
                    </tr>
                    <tr>
                        {filtrar.map((pro, index) => (
                            <td key={index}>{pro.direcion}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <td colSpan={6}>
                <li class="buton">
                    <Link class="buton" to="/bebidas">Regresar</Link>
                </li>
                    </td>
        </div>
    )
}

export default Refrescos