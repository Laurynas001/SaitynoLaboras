import React from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Cookie from 'js-cookie';

function Navbar(props) {
    function isLoggedIn() {
        if (Cookie.get('accessToken').length < 5)
        {
            console.log('true')
            console.log(Cookie.get('accessToken'))
            return true;
        } else {
            console.log('false')
            console.log(Cookie.get('accessToken').length)
            console.log(Cookie.get('accessToken'))
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
                <Link to='/gasStations' className='navigationBarLink'>
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
            </ul>
        </nav>
    );
}


export default Navbar;