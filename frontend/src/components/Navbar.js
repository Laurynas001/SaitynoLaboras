import React from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <Link to='/' className='link'>
                GasPricer
            </Link>
            <ul className='nav-links'>
                <Link to='/gasStations' className='link'>
                    <li>Degalinės</li>
                </Link>
                <Link to='/prices' className='link'>
                    <li>Kainos</li>
                </Link>
                <Link to='/login' className='link'>
                    <li><button className='loginButton'>Prisijungti</button></li>
                </Link>
            </ul>
        </nav>
    );
}


export default Navbar;