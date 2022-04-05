import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/" className="link" activeClassName="active-link">😋Yummy Food's</NavLink>
            <NavLink to="/about" className="link" activeClassName="active-link">about</NavLink>
            <NavLink to="/foods" className="link" activeClassName="active-link">food</NavLink>
            <NavLink to="/filteredFoods/:slug" className="link" activeClassName="active-link">filteredFoods</NavLink>
        </nav>
    )
}
