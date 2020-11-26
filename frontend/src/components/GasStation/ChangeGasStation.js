import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './ChangeGasStation.css';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}
    
class ChangeGasStation extends React.Component {
    state = {
            name: this.props.location.state.name,
            city: this.props.location.state.city,
            address: this.props.location.state.address,
            longtitude: this.props.location.state.longtitude,
            latitude: this.props.location.state.latitude
        }

    handleGasStationNameChange(value) {
        this.setState({
            name: value,
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

    handleLongtitudeChange(value) {
        this.setState({
            longtitude: value,
        })
    }

    handleLatitudeChange(value) {
        this.setState({
            latitude: value,
        })
    }

    changeGasStation() {
        Axios.put(`https://localhost:5001/GasStations/`+this.props.location.state.id, this.state, config).then(res => {
            console.log(res.data);
        });
    }

    render() {
        return (
            <div className='changeGasStationOutterDiv'>
                <div className='changeGasStationInnerDiv'>
                    <div className='changeGasStationTitleDiv'>
                        <div className='postGasStationTitle'>Koreguoti degalinę</div>
                    </div>
                    <div className='changeGasStationInputDiv'>
                        <label className='inputLabel'>Degalinės pavadinimas</label>
                        <input type='text' placeholder='Pavadinimas' value={this.state.name} className='changeGasStationInput' onChange={event => this.handleGasStationNameChange(event.target.value)} />
                    </div>
                    <div className='changeGasStationInputDiv'>
                        <label className='inputLabel'>Miestas</label>
                        <input type='text' placeholder='Miestas' value={this.state.city} className='changeGasStationInput' onChange={event => this.handleCityChange(event.target.value)} />
                    </div>
                    <div className='changeGasStationInputDiv'>
                        <label className='inputLabel'>Gatvė</label>
                        <input type='text' placeholder='Gatvė' value={this.state.address} className='changeGasStationInput' onChange={event => this.handleAddressChange(event.target.value)} />
                    </div>
                    <div className='changeGasStationInputDiv'>
                        <label className='inputLabel'>Ilguma</label>
                        <input type='text' placeholder='Ilguma' value={this.state.longtitude} className='changeGasStationInput' onChange={event => this.handleLongtitudeChange(event.target.value)} />
                    </div>
                    <div className='changeGasStationInputDiv'>
                        <label className='inputLabel'>Platuma</label>
                        <input type='text' placeholder='Platuma' value={this.state.latitude} className='changeGasStationInput' onChange={event => this.handleLatitudeChange(event.target.value)} />
                    </div>
                    <div className='changeGasStationButtonDiv'>
                        <button className='changeGasStationButton' onClick={event => this.changeGasStation()}>Išsaugoti</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangeGasStation;