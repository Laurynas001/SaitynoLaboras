import React from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';

const cookies = new Cookies();
function RefreshToken() {
    const state = {
        accessToken: cookies.get('accessToken'),
        refreshToken: cookies.get('refreshToken')
    }

    function Refresh() {
        const newTime = new Date();
        console.log('out')
        console.log(Date.parse(newTime))
        console.log(cookies.get('accessTokenExpiration')+'000')
        console.log(cookies.get('accessTokenExpiration')+'000' <= Date.parse(newTime))
        if (cookies.get('accessTokenExpiration')+'000' < Date.parse(newTime)) {
            console.log('refresh')
            Axios.post(`https://localhost:5001/Token`, state).then(res => {
                cookies.set('accessToken', res.data.accessToken)
                cookies.set('refreshToken', res.data.refreshToken)
            });
        }
    }

    return (
        Refresh()  
    );
}

export default RefreshToken;