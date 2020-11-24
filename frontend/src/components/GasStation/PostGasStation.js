import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './PostGasStation.css';

function PostGasStation() {
   const cookies = new Cookies();
   const state = {
        name: '',
        city: '',
        address: '',
        longtitude: '',
        latitude: ''
    }

    const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
    }

    function handleGasStationNameChange(value) {
        state.name = value;
    }

    function handleCityChange(value) {
        state.city = value;
    }

     function handleAddressChange(value) {
        state.address = value;
    }

    function handleLongtitudeChange(value) {
        state.longtitude = value;
    }

    function handleLatitudeChange(value) {
        state.latitude = value;
    }

    function postGasStation() {
        console.log(state);
        Axios.post(`https://localhost:5001/GasStations`, state, config).then(res => {
           console.log(res.data);
        });
        state = {
            name: '',
            city: '',
            address: '',
            longtitude: '',
            latitude: ''
        };
    }

    return (
        <div className='postGasStationOutterDiv'>
            <div className='postGasStationInnerDiv'>
                <div className='postGasStationTitleDiv'>
                    <div className='postGasStationTitle'>Įrašyti naują degalinę</div>
                </div>
                <div className='postGasStationInputDiv'>
                    <input type='text' placeholder='Pavadinimas' className='postGasStationInput' onChange={event => handleGasStationNameChange(event.target.value)}/>
                </div>
                <div className='postGasStationInputDiv'>
                    <input type='text' placeholder='Miestas' className='postGasStationInput' onChange={event => handleCityChange(event.target.value)} />
                </div>
                <div className='postGasStationInputDiv'>
                    <input type='text' placeholder='Gatvė' className='postGasStationInput' onChange={event => handleAddressChange(event.target.value)} />
                </div>
                <div className='postGasStationInputDiv'>
                    <input type='text' placeholder='Ilguma' className='postGasStationInput' onChange={event => handleLongtitudeChange(event.target.value)} />
                </div>      
                <div className='postGasStationInputDiv'>
                    <input type='text' placeholder='Platuma' className='postGasStationInput' onChange={event => handleLatitudeChange(event.target.value)} />
                </div>
                <div className='postGasStationButtonDiv'>
                    <button className='postGasStationButton' onClick={postGasStation}>Išsaugoti</button>
                </div>

            </div>
        </div>
    );
}

export default PostGasStation;