import React from 'react';
import Cookie from 'js-cookie';
import { Redirect } from "react-router-dom";

function Logout() {
    function deleteTokens() {
        Cookie.remove('accessToken');
        Cookie.remove('refreshToken');
    }

    deleteTokens()
    return (    
        <Redirect to='/' />
    );
}

export default Logout;