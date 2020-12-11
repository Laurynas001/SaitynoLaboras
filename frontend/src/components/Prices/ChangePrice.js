import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './ChangePrice.css';
import RefreshToken from '../Token/RefreshToken';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}
    
class ChangePrice extends React.Component {
    state = {
            a98Price: this.props.location.state.a98Price,
            a95Price: this.props.location.state.a95Price,
            dPrice: this.props.location.state.dPrice,
            dzPrice: this.props.location.state.dzPrice,
            gasPrice: this.props.location.state.gasPrice
        }

    handleA98PriceChange(value) {
        this.setState({
            a98Price: value,
        })
    }

    handleA95PriceChange(value) {
        this.setState({
            a95Price: value,
        })
    }

    handleDPriceChange(value) {
        this.setState({
            dPrice: value,
        })
    }

    handleDzPriceChange(value) {
        this.setState({
            dzPrice: value,
        })
    }

    handleGasPriceChange(value) {
        this.setState({
            gasPrice: value,
        })
    }

    changePrice() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.put(`https://localhost:5001/GasStations/` + this.props.location.state.gasStationId + `/Prices/` + this.props.location.state.id, this.state, config).then(res => {
            console.log(res.data);
        });
    };

    render() {
        return (
            RefreshToken(),
            <div className='changePriceOutterDiv'>
                <div className='changePriceInnerDiv'>
                    <div className='changePriceTitleDiv'>
                        <div className='postPriceTitle'>Koreguoti kainą</div>
                    </div>
                    <div className='changePriceInputDiv'>
                        <label className='inputLabel'>A98 kaina</label>
                        <input type='text' placeholder='A98 kaina' value={this.state.a98Price} className='changePriceInput' onChange={event => this.handleA98PriceChange(event.target.value)} />
                    </div>
                    <div className='changePriceInputDiv'>
                        <label className='inputLabel'>A95 kaina</label>
                        <input type='text' placeholder='A95 kaina' value={this.state.a95Price} className='changePriceInput' onChange={event => this.handleA95PriceChange(event.target.value)} />
                    </div>
                    <div className='changePriceInputDiv'>
                        <label className='inputLabel'>D kaina</label>
                        <input type='text' placeholder='D kaina' value={this.state.dPrice} className='changePriceInput' onChange={event => this.handleDPriceChange(event.target.value)} />
                    </div>
                    <div className='changePriceInputDiv'>
                        <label className='inputLabel'>Dz kaina</label>
                        <input type='text' placeholder='Dz kaina' value={this.state.dzPrice} className='changePriceInput' onChange={event => this.handleDzPriceChange(event.target.value)} />
                    </div>
                    <div className='changePriceInputDiv'>
                        <label className='inputLabel'>Dujų kaina</label>
                        <input type='text' placeholder='Dujų kaina' value={this.state.gasPrice} className='changePriceInput' onChange={event => this.handleGasPriceChange(event.target.value)} />
                    </div>
                    <div className='changePriceButtonDiv'>
                        <button className='changePriceButton' onClick={event => this.changePrice()}>Išsaugoti</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePrice;