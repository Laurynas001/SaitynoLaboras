import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './PostReminder.css';
import RefreshToken from '../Token/RefreshToken';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
    }
    
class PostReminder extends React.Component {
    state = {
        gasStationName: this.props.location.state.name,
        gasType: '',
        wantedPrice: '',
        gasStationId: this.props.location.state.id
    }

    city = this.props.location.state.city;
    address = this.props.location.state.address;

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

    postReminder() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.post(`https://localhost:5001/Users/` + cookies.get('userId') + `/Reminders`, this.state, config).then(res => {
            console.log(res.data);
            });
        this.setState({
            gasStationName: '',
            gasType: '',
            wantedPrice: ''
    })
    }

    render() {
        return (
            RefreshToken(),
            <div className='postReminderOutterDiv'>
                <div className='postReminderInnerDiv'>
                    <div className='postReminderTitleDiv'>
                        <div className='postReminderTitle'>Įrašyti naują priminimą</div>
                    </div>
                    <div className='postReminderInputDiv'>
                        <input type='text' placeholder='Pavadinimas' disabled="disabled" value={this.state.gasStationName} className='disabledPostReminderInput' onChange={event => this.handleGasStationNameChange(event.target.value)} />
                    </div>
                    <div className='postReminderInputDiv'>
                        <input type='text' placeholder='Miestas' disabled="disabled" value={this.city} className='disabledPostReminderInput' onChange={event => this.handleCityChange(event.target.value)} />
                    </div>
                    <div className='postReminderInputDiv'>
                        <input type='text' placeholder='Gatvė' disabled="disabled" value={this.address} className='disabledPostReminderInput' onChange={event => this.handleAddressChange(event.target.value)} />
                    </div>
                    <div className='postReminderInputDiv'>
                        <input type='text' placeholder='Kuro tipas' value={this.state.gasType} className='postReminderInput' onChange={event => this.handleGasTypeChange(event.target.value)} />
                    </div>
                    <div className='postReminderInputDiv'>
                        <input type='text' placeholder='Norima kaina' value={this.state.wantedPrice} className='postReminderInput' onChange={event => this.handleWantedPriceChange(event.target.value)} />
                    </div>
                    <div className='postReminderButtonDiv'>
                        <button className='postReminderButton' onClick={event => this.postReminder()}>Išsaugoti</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostReminder;