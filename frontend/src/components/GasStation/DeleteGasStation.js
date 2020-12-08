import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import RefreshToken from '../Token/RefreshToken';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}

function DeleteGasStation(props) {
    const state = {
        id: props.id
    }
     RefreshToken();
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.delete(`https://localhost:5001/GasStations/`+ props.id, config).then(res => {
            console.log(res.data);
        });
    window.location.href = "/getGasStations";
}

export default DeleteGasStation;