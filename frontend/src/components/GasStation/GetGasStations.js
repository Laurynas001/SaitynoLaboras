import React, {useState} from 'react';
import './GetGasStations.css';
import Axios from 'axios';
import Card from './GasStationCard';
import RefreshToken from '../Token/RefreshToken';

function GetGasStations() {
    const [gasStations, setGasStations] = useState([]);

    function getGasStations() {
        Axios.get(`https://localhost:5001/GasStations`).then(res => {
            setGasStations(res.data);
        });
    }
    if (gasStations.length == 0) {
        getGasStations();
    }
    return (
        RefreshToken(),
        <div className='getGasStationsOutterDiv'>
            <div className='cards'>
                {
                    gasStations.map(gasStation => Card(gasStation))
                }
            </div>
        </div>
            );
        }

export default GetGasStations;