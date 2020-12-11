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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73742.50225205625!2d25.138041145569638!3d54.7192428313467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x905d510c9fc773da!2sVIADA!5e0!3m2!1slt!2slt!4v1607708242522!5m2!1slt!2slt"></iframe>
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