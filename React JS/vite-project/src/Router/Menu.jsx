import React from 'react'
import {Link} from 'react-router'

const Menu = () => {
  return (
    <div>
        <Link to="/home">Home</Link>
        <a href="/About">About</a>
        <a href="/About/a1">About 1</a>
        <a href="/About/a2">About 2</a>
        <a href="/Contact">Contact</a>
    </div>
  )
}

export default Menu;