import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='mainFooter'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4 className='title'>GasPricer</h4>
                        <ul className='footerList'>
                            <li>+37067895456</li>
                            <li>Kaunas, Lietuva</li>
                            <li>Studentų g., 50</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4 className='title'>Sek mus</h4>
                        <ul className='footerList'>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4 className='title'>Pagalba</h4>
                        <ul className='footerList'>
                            <li>Susisiek su mumis</li>
                            <li>Privatumo politika</li>
                            <li>Sąlygos</li>
                        </ul>
                    </div>
                </div>
                <h1 className='gasPricer'>GasPricer</h1>
                <div className='row1'>
                    <p>
                        &copy;{new Date().getFullYear()} GasPricer | Visos teisės saugomos | Sąlygos | Privatumas
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;