import { Link } from "react-router-dom";

import React from 'react'

function Menu() {
  return (
    <ul>
        <li>
            <Link to='/red'>red</Link>
        </li>
        <li>
            <Link to='/blue'>blue</Link>
        </li>
    </ul>
  )
}

export default Menu