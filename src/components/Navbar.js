import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" activeclassname="active-link">😋Yummy Food's</NavLink>
            <NavLink to="/about" activeclassname="active-link">about</NavLink>
            <NavLink to="/foods" activeclassname="active-link">food</NavLink>
            <NavLink to="/filteredFoods/:slug" activeclassname="active-link">filteredFoods</NavLink>
        </nav>
    )
}
