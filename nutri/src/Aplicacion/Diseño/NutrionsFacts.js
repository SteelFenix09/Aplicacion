import React, { useState } from 'react'
import './img/Iniciativa.css'
import nutrion1 from './img/galletas.png'
import nutrion2 from './img/Sabrita.png'
import nutrion3 from './img/Refrescos.png' 


function NutrionsFacts() {
    return (
        <div className='textNutrion'>
            <p id='pez-gordo' className='col-sm-12 col-md-6 col-lg-4'Ñ>
                Nutrionfact es tu asistente personal para la nutrición. Consulta rápidamente tablas nutricionales de alimentos y productos, compara opciones y toma decisiones saludables. La aplicación te permite:

                Escanear códigos de barras para obtener información nutricional detallada.
                Buscar alimentos por nombre o categoría.
                Personalizar preferencias para destacar alérgenos, macronutrientes o calorías.
                Guardar tus alimentos favoritos y crear listas de compras saludables.
                Visualizar gráficos de consumo según tus objetivos nutricionales.
            </p >
            
            <table className="table-striped" >
        
        <td rowSpan={22} className='Nutrion'><img src={nutrion1} id='img-rufles' ></img></td>
        <td rowSpan={22} className='Nutrion'><img src={nutrion3} id='img-rufles' ></img></td>
        <td rowSpan={22} className='Nutrion'><img src={nutrion2} id='img-rufles' ></img></td>
        <td></td>
        </table>
        </div >
    )
}

export default NutrionsFacts