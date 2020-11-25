import React from 'react';
import './GasStationCard.css';
import ChangeGasStation from './ChangeGasStation';  
import { Link } from 'react-router-dom';

function GasStationCard(props) {

    return (
        <div className='card' key={props.id + 'card'}>
                <div className='gasStationChangeValues' key={props.id + 'changeValues'}>
                    <Link to={{pathname: '/changeGasStation', state: props}} className='iconLink'>
                            <i className="fas fa-cog" />
                    </Link>
                </div>
                <div className='gasStationParam' key={props.id + 'name'}>{props.name}</div>
                <div className='gasStationParam' key={props.id + 'city'}>{props.city}</div>
                <div className='gasStationParam' key={props.id + 'address'}>{props.address}</div>
                <div className='gasStationParam' key={props.id + 'longtitude'}>{props.longtitude}</div>
                <div className='gasStationParam' key={props.id + 'latitude'}>{props.latitude}</div>
        </div>
    );
}

export default GasStationCard;