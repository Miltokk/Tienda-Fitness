import "./NavBar.css";
import logo from "../../assets/LogoFitness.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <nav className='navbar'> 
        <div>
        <img className='logo' src={logo} alt="LogoMarcaSuplementos"/>
        </div>
        <ul className='navbar-links'>
            <li className='navbar-item'>
                <Link to="/">Home</Link>
            </li>
            <li className='navbar-item'>
                <Link to="/categoria/suplemento">Suplementos</Link>
            </li>
            <li className='navbar-item'>
                <Link to="/categoria/ropa">Ropa</Link>
            </li>
        </ul>
    <CartWidget/>
    </nav>
    
    );
}

export default NavBar