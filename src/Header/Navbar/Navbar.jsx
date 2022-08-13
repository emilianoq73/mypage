import React from 'react'
import './Navbar.css'

const Navbar = () => {
    
    const navBarItems = ["Work", "About", "Contacto"]

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid flex-column flex-sm-row">
            <a className="navbar-brand justify-content-lg-start text-white" id='titulo' href="../public/index.html">SERGIO QUIPILDOR DEV</a>
            <ul className="nav justify-content-lg-end mx-1">
                {navBarItems.map((item) => (
                                <li className='text-white mx-2'>{item}</li>
                            ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar