import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './PostGasStation.css';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
    }
    
class PostGasStation extends React.Component {
    state = {
        name: '',
        city: '',
        address: '',
        longtitude: '',
        latitude: ''
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

    postGasStation() {
            Axios.post(`https://localhost:5001/GasStations`, this.state, config).then(res => {
            console.log(res.data);
            });
        this.setState({
        name: '',
        city: '',
        address: '',
        longtitude: '',
        latitude: ''
    })
    }

    render() {
        return (
            <div className='postGasStationOutterDiv'>
                <div className='postGasStationInnerDiv'>
                    <div className='postGasStationTitleDiv'>
                        <div className='postGasStationTitle'>Įrašyti naują degalinę</div>
                    </div>
                    <div className='postGasStationInputDiv'>
                        <input type='text' placeholder='Pavadinimas' value={this.state.name} className='postGasStationInput' onChange={event => this.handleGasStationNameChange(event.target.value)} />
                    </div>
                    <div className='postGasStationInputDiv'>
                        <input type='text' placeholder='Miestas' value={this.state.city} className='postGasStationInput' onChange={event => this.handleCityChange(event.target.value)} />
                    </div>
                    <div className='postGasStationInputDiv'>
                        <input type='text' placeholder='Gatvė' value={this.state.address} className='postGasStationInput' onChange={event => this.handleAddressChange(event.target.value)} />
                    </div>
                    <div className='postGasStationInputDiv'>
                        <input type='text' placeholder='Ilguma' value={this.state.longtitude} className='postGasStationInput' onChange={event => this.handleLongtitudeChange(event.target.value)} />
                    </div>
                    <div className='postGasStationInputDiv'>
                        <input type='text' placeholder='Platuma' value={this.state.latitude} className='postGasStationInput' onChange={event => this.handleLatitudeChange(event.target.value)} />
                    </div>
                    <div className='postGasStationButtonDiv'>
                        <button className='postGasStationButton' onClick={event => this.postGasStation()}>Išsaugoti</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostGasStation;