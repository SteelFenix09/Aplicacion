import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


import './img/Sabritas/Sabrita.css'
import Pizz from './img/Sabritas/Pizee.png'
import Rufles from './img/Sabritas/Rufles.png'
import Torci from './img/Sabritas/torci.png'


function Sabritas() {

    const [buscarParams] = useSearchParams();
    const buscaTexto = buscarParams.get('search') || '';
    const [localTexto, setLocalTexto] = useState(buscaTexto)

    const sabri = [{
        nombre: 'Doritos Pizzerolas',
        descripcion: 'Son unas deliciosas botanas que combinan el sacrujiente y divertido de los Doritos con el irresistiblegusto de la pizza',
        imagen: <img src={Pizz} id='pizz' />,
        direccion: <li class="buton"><Link class="buton" to="/pizz">Mas informacion...</Link></li>
            
        
    },
    {
        nombre: 'Rufles Queso',
        descripcion: 'Estos pequeños bocadillos en forma de "chetos" están recubiertos de un delicioso polvo de queso que los hace irresistibles.',
        imagen: <img src={Rufles} id='rufles' />,
        direccion:<li class="buton"><Link class="buton" to="/rufles">Mas informacion...</Link></li>
    },
    {
        nombre: 'Chetos Torciditos',
        descripcion: '...',
        imagen: <img src={Torci} id='torci' />,
        direccion:<li class="buton"><Link class="buton" to="/torciditos">Mas informacion...</Link></li>
    },
    ]

    const delicias = localTexto ? sabri.filter((pro) => pro.nombre.toLowerCase().includes(localTexto.toLowerCase())) : sabri

    const buscador = (e) => { setLocalTexto(e.target.value) }

    return (
        <div>
            <form class="d-flex" role="search" >
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={localTexto} onChange={buscador} />
            </form>
            <table>
                <tbody>
                    <tr>
                        {delicias.map((pro, index) => (
                            <td key={index}>{pro.imagen}</td>
                        ))}
                    </tr>
                    <tr>
                        {delicias.map((pro, index) => (
                            <td key={index}>{pro.nombre}</td>
                        ))}
                    </tr>
                    <tr>
                        {delicias.map((pro, index) => (
                            <td key={index}>{pro.descripcion}</td>
                        ))}
                    </tr>
                    <tr>
                    {delicias.map((pro, index) => (
                            <td key={index}>{pro.direccion}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Sabritas