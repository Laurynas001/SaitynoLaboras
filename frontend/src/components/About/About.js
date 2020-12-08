import React from 'react';
import './About.css';
import RefreshToken from '../Token/RefreshToken';

function About() {
    return (
        RefreshToken(),
        <div className='aboutOutterDiv'>
            <div className='aboutInnerDiv'>
                <div className='aboutTitle1'>Apie mus</div>
                <div className='aboutTitle2'>Istorija</div>
                <div className='aboutTitleText'>UAB “GasPricer” buvo įkurtas dar 2017-aisiais,
                ir nuo pat tada iki šiol stebi degalų kainų tendencijas Lietuvoje. Įmonė įsikūrusi Kaune,
                joje dirba daugiau nei 10 specialistų. UAB “GasPricer” aktyviai stebi ne tik kainų kitimus Lietuvoje, bet ir Pasaulyje.
                Tai naudinga, nes galima prognozuoti kainų kitimą ateityje. Viskas daroma tik dėl to, kad vairuotojai
                naudodamiesi įmonės paslaugomis sutaupytų.</div>
            </div>
        </div>
    );
}

export default About;