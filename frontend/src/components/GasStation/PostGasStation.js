import React from 'react';
import Axios from 'axios';
import Cookie from 'js-cookie';
import './PostGasStation.css';

function PostGasStation() {
   const state = {
        gasStationName: '',
       city: '',
       address: '',
       longtitude: '',
        latitude: ''
    }

    function handleGasStationNameChange(value) {
        state.gasStationName = value;
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
        Axios.post(`https://localhost:5001/GasStations`).then(res => {
           console.log(res);
        });
    }

    return (
        <div className='postGasStationOutterDiv'>
            <div className='postGasStationInnerDiv'>
                <div>
                    <input type='text' placeholder='Pavadinimas' className='gasStationName' onChange={event => handleGasStationNameChange(event.target.value)}/>
                </div>
                <div>
                    <input type='text' placeholder='Miestas' className='city' onChange={event => handleCityChange(event.target.value)} />
                </div>

                <div>
                    <input type='text' placeholder='Gatvė' className='address' onChange={event => handleAddressChange(event.target.value)} />
                </div>
                <div>
                    <input type='text' placeholder='Ilguma' className='longtitude' onChange={event => handleLongtitudeChange(event.target.value)} />
                </div>      
                <div>
                    <input type='text' placeholder='Platuma' className='latitude' onChange={event => handleLatitudeChange(event.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default PostGasStation;