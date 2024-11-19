import React from 'react'
import { Link, } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

import Pizz from './Diseño/img/Sabritas/Pizee.png'
import Rufles from './Diseño/img/Sabritas/Rufles.png'
import Torci from './Diseño/img/Sabritas/torci.png'

import Arizona from './Diseño/img/Refrescos/Nutri10.png'
import Sprite from './Diseño/img/Refrescos/Nutri7.png'
import Pepsi from './Diseño/img/Refrescos/Nutri8.png'

import cho from './Diseño/img/imgalleta/chokis.jpg'
import empe from './Diseño/img/imgalleta/empe.png'
import img from './Diseño/img/imgalleta/sponch.jpg'




function ListaProductos() {

    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search') || '';

    const [buscarParams] = useSearchParams();
    const localTexto = buscarParams.get('search') || '';

    const [buscargalle] = useSearchParams();
    const localgalle = buscargalle.get('search') || '';


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

    const galletita = [{
        nombre: 'Galleta sponch',
        descripcion: <li class="">
            <Link class="nav-link" to="/sponch">
                <h6>La galleta Sponch es un dulce mexicano
                    compuesto por una base de galleta, malvavisco y
                    cobertura de chocolate.</h6></Link>
        </li>,
        imagen: <img src={img} id='sprite' />,
    },
    {
        nombre: 'Galleta chokis',
        descripcion: <li class="">
            <Link class="nav-link" to="/choki"><h6>
                La galleta Chokis es una galleta crujiente con
                trozos de chocolate,
                Su textura combina lo crujiente y lo suave.</h6></Link>
        </li>,
        imagen: <img src={cho} id='sprite' />,
    },
    {
        nombre: 'Galleta emperador',
        descripcion: <li class="nav-item">
            <Link class="nav-link" to="/empe">
                <h6>La galleta Emperador de chocolate
                    es una galleta rellena de crema de chocolate,
                    con una textura crujiente y suave.</h6>
            </Link>
            </li>,
            imagen: <img src={empe} id='sprite' />,
    },
            ]

    const delicias = searchText ? sabri.filter((product) => product.nombre.toLowerCase().includes(searchText.toLowerCase())) : sabri;

    const filtrar = localTexto ? soda.filter((pro) => pro.nombre.toLowerCase().includes(localTexto.toLowerCase())) : soda

    const galet = localgalle ? galletita.filter((gal) => gal.nombre.toLowerCase().includes(localgalle.toLowerCase())) : galletita


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
                        <tr>
                            {galet.map((pro, index) => (
                                <td key={index}> {pro.imagen} </td>
                            ))}
                        </tr>
                        <tr>
                            {galet.map((pro, index) => (
                                <td key={index}>{pro.nombre}</td>
                            ))}
                        </tr>
                        <tr>
                            {galet.map((pro, index) => (
                                <td key={index}>{pro.descripcion}</td>
                            ))}
                        </tr>

                    </tbody>
                </table>

            </div>
            )
}

            export default ListaProductos