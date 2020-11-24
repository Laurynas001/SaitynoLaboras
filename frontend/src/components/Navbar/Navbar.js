import React from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Cookies from 'universal-cookie';

function Navbar(props) {
    const cookies = new Cookies();

    function isLoggedIn() {
        if (cookies.get('accessToken') == null)
        {
            console.log('true')
            console.log(cookies.get('accessToken'))
            return true;
        } else {
            console.log('false')
            console.log(cookies.get('accessToken'))  
            return false;
        }
    }

    return (
        <nav className='navigationBar'>
                <Link to='/' className='navigationBarLogo'>
                    GasPricer
            </Link>
            <ul className='navigationBarLinks'>
                <Link to='/about' className='navigationBarLink'>
                    <li>Apie mus</li>
                </Link>
                <Link to='/getGasStations' className='navigationBarLink'>
                    <li>Degalinės</li>
                </Link>
                <Link to='/prices' className='navigationBarLink'>
                    <li>Kainos</li>
                </Link>
                {isLoggedIn() ?
                    <Link to='/login' className='navigationBarLink'>
                        <li><button className='loginButton'>Prisijungti</button></li>
                    </Link>
                    :
                    <Link to='/logout' className='navigationBarLink'>
                        <li><button className='loginButton'>Atsijungti</button></li>
                    </Link>
                }
                <Link to='/postGasStations' className='navigationBarLink'>
                    <li>Įkelti degalinę</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Navbar;