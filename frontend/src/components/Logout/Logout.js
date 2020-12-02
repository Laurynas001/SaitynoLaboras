import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router-dom";

function Logout() {
    const cookies = new Cookies();

    function deleteTokens() {
        cookies.remove('accessToken');
        cookies.remove('refreshToken');
        cookies.remove('userId');
        cookies.remove('role');
        window.location.href = "/";
    }

    deleteTokens()
    return (    
        <Redirect to='/about' />
    );
}

export default Logout;