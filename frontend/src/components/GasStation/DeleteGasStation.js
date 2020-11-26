import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';

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
        Axios.delete(`https://localhost:5001/GasStations/`+ props.id, config).then(res => {
            console.log(res.data);
        });
    window.location.href = "/getGasStations";
}

export default DeleteGasStation;