import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import navbarlogo from '../assests/navbarlogo.png'
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={navbarlogo} alt="logo" className="logo"/>
        <p className="brand-text">ProdigyFlow</p>
      </div>
      <div className="navbar-links">
        {/* <Link to='/' className="nav-link">Home</Link> */}
         <Link to='/register' className="nav-link">Register</Link>

        <Link to='/login'className="nav-link" >Login</Link> 
      </div>
    </nav>
  )
}

export default NavBar
