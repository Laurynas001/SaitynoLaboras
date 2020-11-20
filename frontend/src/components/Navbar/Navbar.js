import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar(props) {
    return (
        <nav className='navigationBar'>
            <Link to='/' className='navigationBarLogo'>
                GasPricer
            </Link>
            <ul className='navigationBarLinks'>
                <Link to='/about' className='navigationBarLink'>
                    <li>Apie mus</li>
                </Link>
                <Link to='/gasStations' className='navigationBarLink'>
                    <li>Degalinės</li>
                </Link>
                <Link to='/prices' className='navigationBarLink'>
                    <li>Kainos</li>
                </Link>
                <Link to='/login' className='navigationBarLink'>
                    <li><button className='loginButton'>Prisijungti</button></li>
                </Link>
            </ul>
        </nav>
    );
}


export default Navbar;