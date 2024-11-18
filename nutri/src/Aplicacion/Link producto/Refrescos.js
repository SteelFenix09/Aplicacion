import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { useSearchParams } from 'react-router-dom'




import './../Diseño/img/Refrescos/refrs.css'

import Arizona from './../Diseño/img/Refrescos/Nutri10.png'
import Sprite from './../Diseño/img/Refrescos/Nutri7.png'
import Pepsi from './../Diseño/img/Refrescos/Nutri8.png'





function Refrescos() {

    const [buscarParams] = useSearchParams();
    const buscaTexto = buscarParams.get('search') || '';
    const [localTexto, setLocalTexto] = useState(buscaTexto)

    const soda = [{
        nombre: 'Arizona',
        descripcion: '...',
        imagen: <img src={Arizona} id='arizona' />,
        direcion: <li class="buton"><Link class="buton" to="/arizona">Mas informacion...</Link></li>
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
        imagen: <img src={Pepsi} id='sprite' />,
        direcion: <li class="buton"><Link class="buton" to="/pepsi">Mas informacion...</Link></li>
    },
    ]

    const filtrar = localTexto ? soda.filter((pro) => pro.nombre.toLowerCase().includes(localTexto.toLowerCase())) : soda

    const buscador = (e) =>{setLocalTexto(e.target.value)}


    return (
        <div>
            <form class="d-flex" role="search" >
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={localTexto} onChange={buscador} />
            </form>
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
        </div>
    )
}

export default Refrescos