import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './ChangeReminder.css';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}
    
class ChangeReminder extends React.Component {
    state = {
            gasStationName: this.props.location.state.gasStationName,
            city: this.props.location.state.city,
            address: this.props.location.state.address,
            gasType: this.props.location.state.gasType,
            wantedPrice: this.props.location.state.wantedPrice
        }

    handleGasStationNameChange(value) {
        this.setState({
            gasStationName: value,
        })
    }

    handleCityChange(value) {
        this.setState({
            city: value,
        })
    }

    handleAddressChange(value) {
        this.setState({
            address: value,
        })
    }

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
        Axios.put(`https://localhost:5001/GasStations/`+this.props.location.state.id, this.state, config).then(res => {
            console.log(res.data);
        });
    };

    render() {
        return (
            <div className='changeReminderOutterDiv'>
                <div className='changeReminderInnerDiv'>
                    <div className='changeReminderTitleDiv'>
                        <div className='postGasStationTitle'>Koreguoti priminimą</div>
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Degalinės pavadinimas</label>
                        <input type='text' placeholder='Pavadinimas' value={this.state.name} className='changeReminderInput' onChange={event => this.handleGasStationNameChange(event.target.value)} />
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Miestas</label>
                        <input type='text' placeholder='Miestas' value={this.state.name} className='changeReminderInput' onChange={event => this.handleCityChange(event.target.value)} />
                    </div>
                     <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Gatvė</label>
                        <input type='text' placeholder='Gatvė' value={this.state.name} className='changeReminderInput' onChange={event => this.handleAddressChange(event.target.value)} />
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Kuro tipas</label>
                        <input type='text' placeholder='Miestas' value={this.state.city} className='changeReminderInput' onChange={event => this.handleCityChange(event.target.value)} />
                    </div>
                    <div className='changeReminderInputDiv'>
                        <label className='inputLabel'>Norima kaina</label>
                        <input type='text' placeholder='Norima kaina' value={this.state.address} className='changeReminderInput' onChange={event => this.handleAddressChange(event.target.value)} />
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