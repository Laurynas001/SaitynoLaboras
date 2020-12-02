import React, {useState} from 'react';
import './GasStationCard.css';
import DeleteGasStation from './DeleteGasStation';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import GetPrices from '../Prices/GetPrices';


const cookies = new Cookies();

function isAdmin() {
    if (cookies.get('role') == 'Admin') {
        return true;
    }
    else {
        return false;
    }
}

function isUser() {
    if (cookies.get('role') == 'User') {
        console.log(cookies.get('role'))
        return true;
    }
    else {
        return false;
    }
}

function GasStationCard(props) {
    //const [showModal, setState] = useState(false)

    return (
        <div className='card' key={props.id + 'card'}>
            {isAdmin() ?
            <div className='gasStationChangeValues' key={props.id + 'changeValues'}>
                <Link to={{pathname: '/changeGasStation', state: props}} className='iconLink'>
                    <i className="fas fa-cog" />
                </Link>
                <i className="fas fa-trash-alt" onClick={event => DeleteGasStation(props)}/>
            </div>
                    :
            <div></div>
            }
            <div className='titleInputPair'>
                <div className='gasStationParamTitle'>Degalinės pavadinimas:</div>
                <div className='gasStationParam' key={props.id + 'name'}>{props.name}</div>
            </div>
            <div className='titleInputPair'>
                <div className='gasStationParamTitle'>Miestas:</div>
                <div className='gasStationParam' key={props.id + 'city'}>{props.city}</div>
            </div>
            <div className='titleInputPair'>
             <div className='gasStationParamTitle'>Gatvė:</div>
            <div className='gasStationParam' key={props.id + 'address'}>{props.address}</div>
            </div>
            <div className='titleInputPair'>
             <div className='gasStationParamTitle'>Ilguma:</div>
            <div className='gasStationParam' key={props.id + 'longtitude'}>{props.longtitude}</div>
            </div>
            <div className='titleInputPair'>
             <div className='gasStationParamTitle'>Platuma:</div>
                <div className='gasStationParam' key={props.id + 'latitude'}>{props.latitude}</div>
                </div>
                <div className='linkToPricesDiv'>
                    <Link to={{pathname: '/prices', state: props}} className='pricesLink'>
                        Kainos
                    </Link>
                    {isUser() ?
                    <Link to={{pathname: '/postReminder', state: props}} className='reminderLink'>
                        Sukurti priminimą
                    </Link>
                    :
            <div></div>
            }
            </div>
        </div>
    );
}

export default GasStationCard;