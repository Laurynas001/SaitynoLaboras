import React from 'react';
import Cookie from 'js-cookie';
import { Redirect } from "react-router-dom";

function Logout() {
    function deleteTokens() {
        Cookie.set('accessToken', null);
        Cookie.set('refreshToken', null);
    }

    deleteTokens()
    return (    
        <Redirect to='/' />
    );
}

export default Logout;