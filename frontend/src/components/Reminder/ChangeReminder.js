import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './ChangeReminder.css';
import RefreshToken from '../Token/RefreshToken';


const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}
    
class ChangeReminder extends React.Component {
    state = {
            gasStationName: this.props.location.state.gasStationName,
            gasType: this.props.location.state.gasType,
            wantedPrice: this.props.location.state.wantedPrice,
            gasStationId: this.props.location.state.gasStationId
    }

    state2 = {
        city: '',
        address: ''
    }
    
    componentDidMount() {
         RefreshToken();
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.get(`https://localhost:5001/GasStations/`+this.props.location.state.gasStationId).then(res => {
            this.setState({
                city: res.data.city,
                address: res.data.address
            })
        });
    }

    // handleGasStationNameChange(value) {
    //     this.setState({
    //         gasStationName: value,
    //     })
    // }

    // handleCityChange(value) {
    //     this.setState({
    //         city: value,
    //     })
    // }

    // handleAddressChange(value) {
    //     this.setState({
    //         address: value,
    //     })
    // }

    handleGasTypeChange(value) {
        this.setState({
            gasType: value,
        })
    }

    handleWantedPriceChange(value) {
        this.setState({
            wantedPrice: value,
        })
    }

    changeReminder() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.put(`https://localhost:5001/GasStations/`+this.props.location.state.id, this.state, config).then(res => {
            console.log(res.data);
        });
    };

    render() {
        return (
            RefreshToken(),
            <div className='changeReminderOutterDiv'>
                <div className='changeReminderInnerDiv'>
                    <div className='changeReminderTitleDiv'>
                        <div className='postGasStationTitle'>Koreguoti priminimą</div>
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Degalinės pavadinimas</label>
                        <input type='text' placeholder='Pavadinimas' disabled='disabled' value={this.state.gasStationName} className='disabledChangeReminderInput' onChange={event => this.handleGasStationNameChange(event.target.value)} />
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Miestas</label>
                        <input type='text' placeholder='Miestas' disabled='disabled' value={this.state.city} className='disabledChangeReminderInput' onChange={event => this.handleCityChange(event.target.value)} />
                    </div>
                     <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Gatvė</label>
                        <input type='text' placeholder='Gatvė' disabled='disabled' value={this.state.address} className='disabledChangeReminderInput' onChange={event => this.handleAddressChange(event.target.value)} />
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Kuro tipas</label>
                        <input type='text' placeholder='Kuro tipas' value={this.state.gasType} className='changeReminderInput' onChange={event => this.handleGasTypeChange(event.target.value)} />
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Norima kaina</label>
                        <input type='text' placeholder='Norima kaina' value={this.state.wantedPrice} className='changeReminderInput' onChange={event => this.handleWantedPriceChange(event.target.value)} />
                    </div>
                    <div className='changeReminderButtonDiv'>
                        <button className='changeReminderButton' onClick={event => this.changeReminder()}>Išsaugoti</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangeReminder;