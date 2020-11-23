import React, {useState} from 'react';
import './GasStations.css';
import Axios from 'axios';
import Card from './GasStationCard';
import Cookie from 'js-cookie';

function GasStations() {
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
        <div className='outterDiv'>
            <div className='cards'>
                {
                    gasStations.map(gasStation => Card(gasStation))
                }
            </div>
        </div>
            );
        }

export default GasStations;