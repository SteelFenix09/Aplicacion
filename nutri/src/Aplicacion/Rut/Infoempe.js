import React from 'react'
import { Link } from 'react-router-dom'
import uwu from './../Diseño/img/imgalleta/galletadeempe.png'
import tablaempe from './../Diseño/img/imgalleta/emperadortabla.png'


function Infoempe() {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col"><h2>GALLETA EMPERADOR CHOCOLATE</h2></th>
                        <th scope="col"><h2>INFORMACIÓN NUTRICIONAL</h2></th>
                        <th scope="col"><h2>RECOMENDACIONES</h2></th>
                        <th scope="col"><center>
                            <li class="botoncito">
                                <Link class="botoncito" to="/galleta">
                                    <h6>REGRESAR</h6>
                                </Link>
                            </li></center>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><center><img src={uwu} width="400" height="200"></img>
                        </center></td>
                        <td rowSpan={3}>
                            <img src={tablaempe}></img>
                        </td>

                        <td rowSpan={3}>
                            Si disfrutas de las galletas Emperador de chocolate, aquí tienes algunas recomendaciones para mantener un equilibrio:
                            <br></br>
                            1. Consúmelas con moderación: Estas galletas son altas en azúcar y grasas, por lo que es mejor disfrutarlas ocasionalmente en lugar de convertirlas en un hábito diario.
                            <br></br>
                            2. Acompáñalas con algo más nutritivo: Puedes combinarlas con una porción de frutas frescas, como manzanas o fresas, para añadir fibra y vitaminas a tu merienda.
                            <br></br>
                            3. Alternativas más saludables: Si buscas algo más nutritivo, considera galletas hechas con harina integral, menor cantidad de azúcar o chocolate oscuro, que aporta antioxidantes.
                            <br></br>
                            4. Hidratación: Opta por agua o té sin azúcar como acompañamiento para evitar un exceso de calorías y mantenerte hidratado.
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Infoempe