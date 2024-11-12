import React from 'react'
import { Link } from 'react-router-dom'


import './img/Sabritas/Sabrita.css'
import Pizz from './img/Sabritas/Pizee.png'
import Rufles from './img/Sabritas/Rufles.png'
import Torci from './img/Sabritas/torci.png'


function Sabritas() {
    return (
        <div>

            <table>
                <tr >
                    <td colSpan={3} id='liena'>
                        Sabritas
                    </td>

                </tr>
                <tr>
                    <td colSpan={3}>
                        hola 3
                    </td>

                </tr>
                <tr>
                    <td id='t-piz'>
                        <img src={Pizz} id='Pizz'></img>
                    </td>
                    <td>
                        <img src={Rufles} id='Rufles'></img>
                    </td>
                    <td>
                        <img src={Torci}></img>
                    </td>
                </tr>
                <tr id='lienado'>
                    <td>
                        <h1>Doritos Pizzerolas</h1>
                        <p> Son unas deliciosas botanas que combinan el sabor
                            crujiente y divertido de los Doritos con el irresistible
                            gusto de la pizza.</p>
                    </td>
                    <td>
                        <h1>Rufles Queso</h1>
                        <p>Estos pequeños bocadillos en forma de "chetos" están recubiertos de un delicioso polvo de queso que los hace irresistibles.</p>
                    </td>
                    <td>
                        <h1>Chetos Torciditos</h1>

                    </td>
                </tr>
                <tr>
                    <td>
                        <li class="buton">
                            <Link class="buton" to="/masdoritos">Mas informacion</Link>
                        </li>
                    </td>
                    <td>
                        <li class="buton">
                            <Link class="buton" to="/masrufles">Mas informacion</Link>
                        </li>
                    </td>
                    <td>
                    <li class="buton">
                            <Link class="buton" to="/mastorci">Mas informacion</Link>
                        </li>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Sabritas