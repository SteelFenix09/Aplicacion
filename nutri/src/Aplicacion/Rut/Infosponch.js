import React from 'react'
import { Link } from 'react-router-dom'
import gal from './../Diseño/img/imgalleta/galletadesponch.png'
import img from './../Diseño/img/imgalleta/sponchtabla.jpg'
import './../Diseño/Galletas.css'


function Infoponch() {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"><h2>GALLETA SPONCH</h2></th>
                        <th scope="col"><h2>INFORMACIÓN NUTRICIONAL</h2></th>
                        <th scope="col"><h2>RECOMENDACIONES</h2></th>
                        <th scope="col"><center><li class="botoncito">
                            <Link class="botoncito" to="/galleta">
                                <h6>REGRESAR</h6>
                            </Link>
                        </li></center>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={gal} width="300" height="250"></img>
                        </td>
                        <td rowSpan={3}>
                            <img src={img}></img>
                        </td>

                        <td rowSpan={3}>
                            Si disfrutas de las galletas Sponch, aquí tienes algunas recomendaciones para mantener un equilibrio:
                            <br></br>
                            1. Consúmelas con moderación: Como contienen azúcar y carbohidratos simples, es mejor disfrutarlas ocasionalmente, no como un snack diario.
                            <br></br>
                            2. Acompáñalas con algo más nutritivo: Puedes combinarlas con una fuente de proteínas o fibra, como un puñado de frutos secos o un poco de yogur, para balancear la merienda.
                            <br></br>
                            3. Alternativas más saludables: Si buscas una opción más nutritiva, opta por galletas integrales o de avena, que tienen más fibra y menos azúcar.
                            <br></br>
                            4. Hidratación: Acompáñalas con agua o infusiones sin azúcar, para evitar consumir demasiadas calorías líquidas.
                            Así, puedes disfrutar de tus galletas sin comprometer demasiado tu salud.
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Infoponch
