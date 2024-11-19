import React from 'react'
import { Link, } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

import Pizz from './Diseño/img/Sabritas/Pizee.png'
import Rufles from './Diseño/img/Sabritas/Rufles.png'
import Torci from './Diseño/img/Sabritas/torci.png'

import Arizona from './Diseño/img/Refrescos/Nutri10.png'
import Sprite from './Diseño/img/Refrescos/Nutri7.png'
import Pepsi from './Diseño/img/Refrescos/Nutri8.png'





function ListaProductos() {

    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search') || '';

    const [buscarParams] = useSearchParams();
    const localTexto = buscarParams.get('search') || '';


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
        direccion: <li class="buton"><Link class="buton" to="/rufles">Mas informacion...</Link></li>
    },
    {
        nombre: 'Chetos Torciditos',
        descripcion: '...',
        imagen: <img src={Torci} id='torci' />,
        direccion: <li class="buton"><Link class="buton" to="/torciditos">Mas informacion...</Link></li>
    },
    ]

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

    const delicias = searchText ? sabri.filter((product) => product.nombre.toLowerCase().includes(searchText.toLowerCase())) : sabri;

    const filtrar = localTexto ? soda.filter((pro) => pro.nombre.toLowerCase().includes(localTexto.toLowerCase())) : soda


    return (
        <div>
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

export default ListaProductos