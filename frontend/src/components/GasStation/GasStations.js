import React, {useState} from 'react';
import './GasStations.css';
import Axios from 'axios';

function GasStations() {
    const [gasStations, setGasStations] = useState([]);

    Axios.get(`https://localhost:5001/GasStations`).then(res => {
        setGasStations(res.data);
    });
    
    return (
        <ul>
            {
                gasStations.map(gasStation => <li>{gasStation.id}</li>)
            }
        </ul>
    );
}

export default GasStations;