import React from 'react'
import img from './img/image.png'
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
                    <td><h2 className='encabezado'> Más sobre nuestra iniciativa</h2></td>
                </tr>
                <tr>
                    <td ></td>
                    <td ></td>
                    <td><p className='text-nutri'>Somos conscientes de la importancia de una nutrición adecuada 
                        para nuestras comidas chatarras. Para ello, hemos creado la 
                        Iniciativa ACHAS, que busca promover hábitos alimenticios
                        saludables y equilibrados en nuestra dieta diaria.</p></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <li class="buton">
                            <Link class="buton" to="/mas">Leer mas</Link>
                        </li>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Iniciativa