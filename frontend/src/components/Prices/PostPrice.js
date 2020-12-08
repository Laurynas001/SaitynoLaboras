import React, {useState} from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './PostPrice.css';
import RefreshToken from '../Token/RefreshToken';

function PostPrice(props) {
    const state = {
        a95Price: 0,
        a98Price: 0,
        dPrice: 0,
        dzPrice: 0,
        gasPrice: 0
    }

    const [a95Price, setA95Price] = useState('');
    const [a98Price, setA98Price] = useState('');
    const [dPrice, setDPrice] = useState('');
    const [dzPrice, setDzPrice] = useState('');
    const [gasPrice, setGasPrice] = useState('');

    const cookies = new Cookies();
    const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
    }

    function postPrice() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
            Axios.post(`https://localhost:5001/GasStations/` + props.location.state.id + `/Prices`, state, config).then(res => {
            });
    }

    return (
         RefreshToken(),
        <div className='postPriceOutterDiv'>
            <div className='postPriceInnerDiv'>
                <div className='postPriceTitleDiv'>
                        <div className='postGasStationTitle'>Įrašyti naują kainą</div>
                    </div>
                    <div className='postPriceInputDiv'>
                        <input type='text' placeholder='A98 kaina' value={a95Price} className='postPriceInput' onChange={event => setA95Price(event.target.value)} />
                    </div>
                    <div className='postPriceInputDiv'>
                        <input type='text' placeholder='A95 kaina' value={a98Price} className='postPriceInput' onChange={event => setA98Price(event.target.value)} />
                    </div>
                    <div className='postPriceInputDiv'>
                        <input type='text' placeholder='D kaina' value={dPrice} className='postPriceInput' onChange={event => setDPrice(event.target.value)} />
                    </div>
                    <div className='postPriceInputDiv'>
                        <input type='text' placeholder='Dz kaina' value={dzPrice} className='postPriceInput' onChange={event => setDzPrice(event.target.value)} />
                    </div>
                    <div className='postPriceInputDiv'>
                        <input type='text' placeholder='Dujų kaina' value={gasPrice} className='postPriceInput' onChange={event => setGasPrice(event.target.value)} />
                    </div>
                    <div className='postPriceButtonDiv'>
                        <button className='postPriceButton' onClick={event => postPrice()}>Išsaugoti</button>
                    </div>
            </div>
        </div>
    );
}

export default PostPrice;