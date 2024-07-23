import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

import logo from '../assets/react.svg'

const navLinks = [
    {id: 1, title: 'Home', url: '/'},
    {id: 2, title: 'About us', url: '/about-us'},
    {id: 3, title: 'Contact us', url: '/contact-us'},
]

const Navbar = () => {
  return (
    // <div className="navbar">
        <nav className='navbar-cmp'>
            <Link to={'/'} className="logo">
                <img src={logo} alt="logo" /> 
                <span>React</span>
            </Link>
            <div className="nav-links">
                <ul>
                    {navLinks.map(item => (
                        <li key={item.id}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    // </div>
  )
}

export default Navbar