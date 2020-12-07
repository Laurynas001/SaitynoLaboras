import React from 'react';
import './Home.css';
import heroVideo from '../../Pictures/Spedometer.mp4';
import { Link } from 'react-router-dom';
import RefreshToken from '../Token/RefreshToken';

function Home() {
    return (
        RefreshToken(),
        <div className='homeOutterDiv'>
            <div className='homeTitle'>
                <div className='homeTitle1'>Kiekvienam vairuojančiam svarbu kuro kokybė ir kaina</div>
                <div className='homeTitle2'>GasPricer pasirūpina abiem</div>
                <Link to='/getGasStations'>
                    <button className='getStartedButton'>Pradėti degalinių paiešką</button>
                </Link>
            </div>
            <video autoPlay muted loop className='heroVideo'>
                <source src={heroVideo} type='video/mp4'/>
            </video>
        </div>
    );
}

export default Home;