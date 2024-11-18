import React from 'react'
import { Link } from 'react-router-dom'

import cho from './../Diseño/img/imgalleta/chokis.jpg'
import empe from './../Diseño/img/imgalleta/empe.png'
import img from './../Diseño/img/imgalleta/sponch.jpg'

function Galletas() {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><h3><center>Galleta sponch</center></h3></th>
            <th scope="col"><h3><center>Galleta chokis</center></h3></th>
            <th scope="col"><h3><center>Galleta emperador</center></h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td><img src={img} width="450" height="300"></img></td>
            <td><img src={cho} width="480" height="300"></img></td>
            <td><img src={empe} width="480" height="300"></img></td>
          </tr>
          <tr>
            <td><center>
              <li class="">
                <Link class="nav-link" to="/sponch">tablasponch</Link>
              </li>
            </center></td>
            <td><center>
              <li class="">
                <Link class="nav-link" to="/choki">tablaschokis</Link>
              </li>
            </center></td>
            <td><center>
              <li class="nav-item">
                <Link class="nav-link" to="/empe">tablasempe</Link>
              </li></center></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Galletas

