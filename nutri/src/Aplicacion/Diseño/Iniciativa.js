import React from 'react'
import img from './img/Nutri10.png'
import './img/Iniciativa.css'
import { Link } from 'react-router-dom'


function Iniciativa() {
    return (
        <div>
            <table>
                <tr>
                    <td rowSpan={3}><img src={img} className='manipulacio'></img></td>
                    <td ></td>
                    <td ></td>
                    <td><h3 className='encabezado'> ¡Nuestra iniciativa!</h3></td>
                </tr>
                    <td ></td>
                    <td ></td>
                    <p className='text-nutri'>Nuestra iniciativa es hacer a la población Mexicana 
                         consciente de la importancia de una nutrición adecuada para nuestras salud y bienestar.
                         Por ello, NUTRIONFACTS muestra la cantidad de calorías, grasas, azucares, etc. 
                         Que contienen los alimentos empaquetados y así promover hábitos alimenticios saludables y 
                         equilibrados en nuestra dieta diaria.</p>
                <tr>
                    <td></td>
                    <td></td>

                        <li class="buton">
                            <Link class="buton" to="/mas">¡Leer mas...!</Link>
                        </li>
                
                </tr>
            </table>
        </div>
    )
}

export default Iniciativa