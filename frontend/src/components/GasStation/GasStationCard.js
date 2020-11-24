import React from 'react';
import './GasStationCard.css';

function GasStationCard(props) {
    return (
        <div className='card' key={props.id+'card'}>
                <div className='gasStationParam' key={props.id + 'name'}>{props.name}</div>
                <div className='gasStationParam' key={props.id + 'city'}>{props.city}</div>
                <div className='gasStationParam' key={props.id + 'address'}>{props.address}</div>
                <div className='gasStationParam' key={props.id + 'longtitude'}>{props.longtitude}</div>
                <div className='gasStationParam' key={props.id + 'latitude'}>{props.latitude}</div>
        </div>
    );
}

export default GasStationCard;