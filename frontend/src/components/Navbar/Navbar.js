import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Cookies from 'universal-cookie';
import Login from '../Login/Login';
import SideNavbar from '../SideNavbar/SideNavbar';
const cookies = new Cookies();
    
class Navbar extends React.Component {    
    state = {
        isLoggedIn: false,
        isAdmin: false,
        toggle: false
    }
    
    isLoggedIn() {
        if (cookies.get('accessToken') != null) {
            this.state.isLoggedIn = true;
            return true;
        } else {
            this.state.isLoggedIn = false;
            return false;
        }
    }
        
    isAdmin() {
        if (cookies.get('role') == 'Admin')
        {
            this.state.isAdmin = true;
            return true;
        } else {
            this.state.isAdmin = false;
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
                    {this.isAdmin() ?
                    <Link to='/getUsers' className='navigationBarLink'>
                            <li>Naudotojai</li>
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
                    {this.isLoggedIn() ?
                        <div></div>
                        :
                         <Link to='/postUser' className='navigationBarLink'>
                            <li><button className='loginButton'>Registruotis</button></li>
                        </Link>
                    }
                </ul>
                {this.state.toggle ?
                    <button className='fas fa-times' onClick={event => this.setState({ toggle: !this.state.toggle })}></button>
                    :
                    <button className='fas fa-bars' onClick={event => this.setState({ toggle: !this.state.toggle })}></button>
                }
                {this.state.toggle ?
                    <SideNavbar props={this.state}/>
                    :
                <div></div>
                }
            </nav>
        );
    }
}


export default Navbar;