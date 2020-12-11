import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';

const cookies = new Cookies();
function RefreshToken() {
    const state = {
        accessToken: cookies.get('accessToken'),
        refreshToken: cookies.get('refreshToken')
    }

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    function Refresh() {
        const newTime = new Date();
        if (cookies.get('accessTokenExpiration') + '000' < Date.parse(newTime)) {
            Axios.post(`https://localhost:5001/Token`, state).then(res => {
                cookies.set('accessToken', res.data.accessToken);
                cookies.set('refreshToken', res.data.refreshToken);
                cookies.set("accessTokenExpiration", parseJwt(res.data.accessToken).exp);
            });
        }
    }

        return (
            Refresh()
        );
}

export default RefreshToken;