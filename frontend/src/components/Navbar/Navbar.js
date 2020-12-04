import React from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Cookies from 'universal-cookie';
import Login from '../Login/Login';
   
const cookies = new Cookies();
    
class Navbar extends React.Component {    
    state = {
        isLoggedIn: false,
        isAdmin: false
    }
    
    isLoggedIn() {
        if (cookies.get('accessToken') != null) {
            return true;
        } else {
            return false;
        }
    }
        
    isAdmin() {
        if (cookies.get('role') == 'Admin')
        {
            return true;
        } else {
            return false;
    }
}
    render() {
        return (
              <Login parentCallback = {this.callbackFunction}/>,
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
                    {this.isLoggedIn() ?
                        <Link to='/reminders' className='navigationBarLink'>
                            <li>Priminimai</li>
                        </Link>
                        :
                        <div></div>
                    }
                     {this.isAdmin() ?
                    <Link to='/postGasStations' className='navigationBarLink'>
                            <li>Sukurti naują degalinę</li>
                    </Link>
                        :
                        <div></div>
                    }
                    {this.isLoggedIn() ?
                        <Link to='/logout' className='navigationBarLink'>
                            <li><button className='loginButton'>Atsijungti</button></li>
                        </Link>
                        :
                         <Link to='/login' className='navigationBarLink'>
                            <li><button className='loginButton'>Prisijungti</button></li>
                        </Link>
                    }
                </ul>
            </nav>
        );
    }
}


export default Navbar;