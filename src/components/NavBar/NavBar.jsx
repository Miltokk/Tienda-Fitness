import React from 'react';
import "./NavBar.css";
import logo from "../../assets/LogoFitness.png";
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
    <nav className='navbar'> 
        <div>
        <img className='logo' src={logo} alt="LogoMarcaSuplementos"/>
        </div>
        <ul className='navbar-links'>
            <li className='navbar-item'>
                <a href='#'>Home</a>
            </li>
            <li className='navbar-item'>
                <a href='#'>Suplementos</a>
            </li>
            <li className='navbar-item'>
                <a href='#'>Ropa</a>
            </li>
        </ul>
    <CartWidget/>
    </nav>
    
    )
}

export default NavBar