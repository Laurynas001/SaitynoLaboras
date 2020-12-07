import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}

function DeletePrice(props) {

        Axios.delete(`https://localhost:5001/GasStations/`+ props.gasStationId + `/Prices/` + props.id, config).then(res => {
        });
    window.location.href = "/getPrices";
}

export default DeletePrice;