import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router-dom";

function Logout() {
    const cookies = new Cookies();

    function deleteTokens() {
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
    }

    deleteTokens()
    return (    
        <Redirect to='/' />
    );
}

export default Logout;