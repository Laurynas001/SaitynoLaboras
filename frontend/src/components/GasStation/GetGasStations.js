import React, {useState} from 'react';
import './GetGasStations.css';
import Axios from 'axios';
import Card from './GasStationCard';
import RefreshToken from '../Token/RefreshToken';
import { format } from 'date-fns';

function GetGasStations() {
    const [gasStations, setGasStations] = useState([]);

    function getGasStations() {
        const today = Date.now();
        console.log(format(new Date(), 'yyyy/MM/dd kk:mm:ss'))
        console.log(today)
        console.log(new Intl.DateTimeFormat('eu', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today));
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