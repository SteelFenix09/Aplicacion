import React from 'react'
import './Diseño/img/Iniciativa.css'

function MasIniciativa() {
    return (
        <div>
            <h1 className='tit-inici'>¡Objetivos y Indicaciones! </h1>
            <table className='text1'>
                <tr>
                <td> <h3> ¡Objetivos! </h3><hr></hr></td>
                <td></td><td></td>
                <td><h3> ¡Indicaciones! </h3><hr></hr></td>
                 </tr>
                
                <tr >
                    <td> - Facilitar el acceso a información nutricional </td>
                    <td></td><td></td>
                    <td> - Límite de consumo de azúcar </td>
                </tr>

                <tr>
                    <td> - Personalización según necesidades de salud </td>
                    <td>  </td>
                    <td> - Alertas sobre grasas saturadas y trans    </td>
                </tr>
                <tr>
                    <td> - Promover hábitos de alimentación saludable </td>
                    <td></td><td></td><td> - Guía de consumo de sodio</td>
                </tr>
                <tr>
                    <td> - Comparación de productos </td>
                    <td></td><td></td><td> - Promoción de alimentos ricos en fibra</td>
                </tr>
                <tr>
                    <td> - Informar sobre alérgenos e ingredientes críticos </td>
                    <td></td><td></td><td> - Alerta de calorías vacías </td>
                </tr>
                <tr>
                    <td> - Apoyo para objetivos de dieta específicos </td>
                    <td></td><td></td><td> - Alternativas saludables</td>
                </tr>
            </table>
        </div>
    )
}

export default MasIniciativa