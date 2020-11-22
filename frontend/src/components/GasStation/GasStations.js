import React, {useState} from 'react';
import './GasStations.css';
import Axios from 'axios';
import Card from './GasStationCard';

function GasStations() {
    const [gasStations, setGasStations] = useState([]);

    Axios.get(`https://localhost:5001/GasStations`).then(res => {
        setGasStations(res.data);
    });
    
    return (
        <div className='cards'>
            {
                gasStations.map(gasStation => Card(gasStation))
            }
        </div>
            );
        }

export default GasStations;