import React, {useState} from 'react';
import './GetGasStations.css';
import Axios from 'axios';
import Card from './GasStationCard';

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
        <div className='outterDiv'>
            <div className='cards'>
                {
                    gasStations.map(gasStation => Card(gasStation))
                }
            </div>
        </div>
            );
        }

export default GetGasStations;