import React, {useState} from 'react';
import './SideNavbar.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
function SideNavbar(props) {
    const state = {
        clicked: false
    }
    const [clicked, setClicked] = useState(false);

    function isLoggedIn() {
        if (cookies.get('accessToken') != null) {
            return true;
        } else {
            return false;
        }
    }
        
    function isAdmin() {
        if (cookies.get('role') == 'Admin') {
            return true;
        } else {
            return false;
        }
    }

    return (
                <ul className = 'sideNavbarLinks'>
                 < Link to = '/about' className = 'sideNavbarLink' >
                    <li>Apie mus</li>
                                </Link >
                    <Link to='/getGasStations' className='sideNavbarLink'>
                        <li>Degalinės</li>
                    </Link>
                {
                    isLoggedIn() ?
                    <Link to='/reminders' className='sideNavbarLink'>
                        <li>Priminimai</li>
                    </Link>
                    :
                    <div></div>
                }
                {
                    isAdmin() ?
                    <Link to='/postGasStations' className='sideNavbarLink'>
                        <li>Sukurti naują degalinę</li>
                    </Link>
                    :
                    <div></div>
                }
                {
                    isAdmin() ?
                    <Link to='/getUsers' className='sideNavbarLink'>
                        <li>Naudotojai</li>
                    </Link>
                    :
                    <div></div>
                }
                {
                    isLoggedIn() ?
                    <Link to='/logout' className='sideNavbarLink'>
                        <li><button className='loginButton'>Atsijungti</button></li>
                    </Link>
                    :
                    <Link to='/login' className='sideNavbarLink'>
                        <li><button className='loginButton'>Prisijungti</button></li>
                    </Link>
                }
                {
                    isLoggedIn() ?
                    <div></div>
                    :
                    <Link to='/postUser' className='sideNavbarLink'>
                        <li><button className='loginButton'>Registruotis</button></li>
                    </Link>
                }
            </ul >
    );
}

export default SideNavbar;