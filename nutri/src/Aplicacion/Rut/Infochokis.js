import React from 'react'
import waos from './../Diseño/img/imgalleta/galletadechokis.png'
import tablacho from './../Diseño/img/imgalleta/tablachokis.png'


function Infochokis() {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"><h2>GALLETA CHOKIS</h2></th>
                        <th scope="col"><h2>INFORMACIÓN NUTRICIONAL</h2></th>
                        <th scope="col"><h2>RECOMENDACIONES</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={waos} width="270" height="240"></img>
                        </td>
                        <td rowSpan={3}>
                            <img src={tablacho}></img>
                        </td>

                        <td rowSpan={3}>
                            Si disfrutas de las galletas Chokis, aquí tienes algunas recomendaciones para mantener un equilibrio:
                            <br></br>
                            1. Consúmelas con moderación: Debido a su contenido de azúcar y grasas, es mejor disfrutarlas ocasionalmente, no como un snack diario.
                            <br></br>
                            2. Acompáñalas con algo más nutritivo: Combínalas con alimentos ricos en fibra o proteínas, como fruta fresca o un puñado de frutos secos, para hacer tu merienda más equilibrada.
                            <br></br>
                            3. Alternativas más saludables: Si buscas algo similar pero más nutritivo, prueba hacer tus propias galletas con avena y chocolate oscuro.
                            <br></br>
                            4. Hidratación: Acompáñalas con agua, leche baja en grasa o infusiones sin azúcar, para evitar añadir más calorías a tu consumo.
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Infochokis