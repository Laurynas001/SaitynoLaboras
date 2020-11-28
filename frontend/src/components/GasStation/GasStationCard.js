import React from 'react';
import './GasStationCard.css';
import DeleteGasStation from './DeleteGasStation';
import { Link } from 'react-router-dom';

function GasStationCard(props) {
    return (
        <div className='card' key={props.id + 'card'}>
                <div className='gasStationChangeValues' key={props.id + 'changeValues'}>
                <Link to={{pathname: '/changeGasStation', state: props}} className='iconLink'>
                    <i className="fas fa-cog" />
                </Link>
                <i className="fas fa-trash-alt" onClick={event => DeleteGasStation(props)}/>
                </div>
                <div className='gasStationParam' key={props.id + 'name'}>{props.name}</div>
                <div className='gasStationParam' key={props.id + 'city'}>{props.city}</div>
                <div className='gasStationParam' key={props.id + 'address'}>{props.address}</div>
                <div className='gasStationParam' key={props.id + 'longtitude'}>{props.longtitude}</div>
                <div className='gasStationParam' key={props.id + 'latitude'}>{props.latitude}</div>
                <div className='linkToPricesDiv'>
                    <Link to={{pathname: '/prices', state: props}} className='pricesLink'>
                        Kainos
                    </Link>
                </div>
        </div>
    );
}

export default GasStationCard;