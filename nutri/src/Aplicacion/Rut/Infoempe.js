import React from 'react'
import uwu from './../Diseño/img/imgalleta/empe.png'
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={uwu} width="480" height="300"></img>
                        </td>
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
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Infoempe