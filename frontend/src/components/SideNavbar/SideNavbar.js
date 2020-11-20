import React from 'react';
import './SideNavbar.css';
import { Link } from 'react-router-dom';


function SideNavbar() {
    return (
        <ul className='sideNavbarLinks'>
                <Link to='/about' className='sideNavbarLink'>
                    <li>Apie mus</li>
                </Link>
                <Link to='/gasStations' className='sideNavbarLink'>
                    <li>Degalinės</li>
                </Link>
                <Link to='/prices' className='sideNavbarLink'>
                    <li>Kainos</li>
                </Link>
                <Link to='/login' className='sideNavbarLink'>
                    <li><button className='sideNavbarLoginButton'>Prisijungti</button></li>
                </Link>
            </ul>
    );
}

export default SideNavbar;