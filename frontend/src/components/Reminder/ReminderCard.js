import React from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import './ReminderCard.css';
import DeleteReminder from './DeleteReminder';
import RefreshToken from '../Token/RefreshToken';
import dateFormat from 'dateformat';

function ReminderCard(props) {
    return (
            RefreshToken(),
            <div className='reminderCard' key={props.id + 'card'}>
                <div className='reminderChangeValues' key={props.id + 'changeReminderValues'}>
                <Link to={{pathname: '/changeReminder', state: props}} className='iconLink'>
                    <i className="fas fa-cog" />
                </Link>
                <i className="fas fa-trash-alt" onClick={event => DeleteReminder(props)}/>
                </div>
                <div className='titleInputPair'>
                    <div className='gasStationParamTitle'>Degalinės pavadinimas:</div>
                    <div className='gasStationParam' key={props.id + 'name'}>{props.gasStationName}</div>
                </div>
                <div className='titleInputPair'>
                    <div className='gasStationParamTitle'>Kuro tipas:</div>
                    <div className='gasStationParam' key={props.id + 'gasType'}>{props.gasType}</div>
                </div>
                <div className='titleInputPair'>
                    <div className='gasStationParamTitle'>Sukūrimo data:</div>
                    <div className='gasStationParam' key={props.id + 'creationDate'}>{dateFormat(props.creationDate, "yyyy-mm-dd hh:mm:ss")}</div>
                </div>
                <div className='titleInputPair'>
                    <div className='gasStationParamTitle'>Galioja iki:</div>
                    <div className='gasStationParam' key={props.id + 'valid'}>{dateFormat(props.validUntil, "yyyy-mm-dd hh:mm:ss")}</div>
                </div>
                <div className='titleInputPair'>
                    <div className='gasStationParamTitle'>Norima kaina:</div>
                    <div className='gasStationParam' key={props.id + 'wantedPrice'}>{props.wantedPrice + '€'}</div>
                </div>
        </div>
        );
}

export default ReminderCard;