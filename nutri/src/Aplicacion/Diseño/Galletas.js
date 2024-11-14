import React from 'react'
import img from './img/sponch.jpg'
import cho from './img/chokis.jpg'
import empe from './img/empe.png'

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
            <td><center><button>Galleta sponch</button></center></td>
            <td><center><button>Galleta chokis</button></center></td>
            <td><center><button>Galleta emperador</button></center></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Galletas

