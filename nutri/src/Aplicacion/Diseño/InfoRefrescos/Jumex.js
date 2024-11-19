import React from 'react'
import { Link } from 'react-router-dom'

import './../img/Refrescos/refrs.css'
import jumex from './../img/Refrescos/Nutri3.png'


function Jumex(){
  return (
    <div>
    <table className="table-striped" >
        <tr><h1 className='Jumex'>Tabla y Recomendaciones</h1></tr>
        <tr>
            
            <td rowSpan={22} ><img src={jumex} id='img-jumex' ></img></td>

                <td colSpan={3}><h4><strong>Informacion Nutricional Por Envase(200ml)</strong></h4></td>
            <td></td>

        </tr>
        <tr>
            <td ><strong>Tamaño de la porcion</strong></td>
        </tr>
        <tr>
            <td ><strong>Porcion por paquete</strong></td>
            <td colSpan={3}><strong>Envase(200ml)</strong></td>
        </tr>
        <tr>
            <td>Calorias</td>
            <td id='porcion'></td>
            <td>Calorias de grasa</td>
        </tr>
        <tr>
            <td>Grasa total</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <tr>
            <td>Grasa trans</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <tr id='porcion'>
            <td>Grasa saturadas</td>
            <td id='porcion'></td>
            <td>0% </td>
            <td><h4><strong>Recomendaciones</strong></h4></td>
        </tr>
        <tr></tr>
        <tr>
            <td>Carboidratos</td>
            <td id='porcion'></td>
            <td>0% </td>
            <td id='rocem'className='text-jumex'>Es fácil dejarse llevar por el sabor, pero intenta controlar las porciones para evitar
                un consumo excesivo de grasas y sodio.</td>
        </tr>
        <tr>
            <td>Fibra Diatetica</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <tr>
            <td>Azucares</td>
            <td id='porcion'></td>
            <td>0% </td>
            <td id='rocem' >Inclúyelas en una dieta variada y equilibrada, combinándolas con frutas, verduras y proteínas.</td>
        </tr>
        <tr></tr>
        <tr>
            <td>Sodio</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <tr></tr>
        <tr>
            <td>Sodio</td>
            <td id='porcion'></td>
            <td>0% </td>
            <td id='rocem'>Antes de consumirlas, revisa la información nutricional para conocer el contenido de calorías,
                grasas, sodio y otros nutrientes.</td>
        </tr>
        <tr></tr>
        <tr>
            <td>Potacio</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <tr>
            <td>Calcio</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <tr></tr>
        <tr>
            <td>Hierro</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <tr></tr>
        <tr>
            <td>Proteinas</td>
            <td id='porcion'></td>
            <td>0% </td>
        </tr>
        <td colSpan={6}>
                <li class="buton">
                    <Link class="buton" to="/bebidas">Regresar</Link>
                </li>
        </td>
    </table></div>
  )
}

export default Jumex