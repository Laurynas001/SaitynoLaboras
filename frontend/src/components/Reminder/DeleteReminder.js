import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}

function DeleteReminder(props) {
    const state = {
        id: props.id
    }
        Axios.delete(`https://localhost:5001/Users/`+ cookies.get('userId') + `/Reminders/` + props.id, config).then(res => {
            console.log(res.data);
        });
    window.location.href = "/getGasStations";
}

export default DeleteReminder;