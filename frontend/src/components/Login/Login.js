import React, { useState } from 'react';
import Axios from 'axios';
import Cookie from 'js-cookie';
import './Login.css';
import { Redirect } from "react-router-dom";

function Login() {
    const state = {
        username: '',
        password: ''
    }

    function handleUsernameChange(value) {
        state.username = value;
    }

    function handlePasswordChange(value) {
        state.password = value;
    }
    
    function handleLogin() {
        Axios.post(`https://localhost:5001/Login`, state).then(res => {
            Cookie.set("accessToken", res.data.accessToken);
            Cookie.set("refreshToken", res.data.refreshToken);
            console.log(res);
            console.log(Cookie.get("accessToken"));
            console.log(Cookie.get("refreshToken"));
        });
    }

    return (
        <div className='parentDiv'>
            <div className='loginComponent'>
                <div className='title'>Prisijungimas</div>
                <div className='outterUsername'>
                    <i className="fas fa-user-alt"/>
                    <input type='text' placeholder='Naudotojo vardas' className='usernameText' onChange={event => handleUsernameChange(event.target.value)}/>
                </div>
                <div className='outterPassword'>
                    <i className="fas fa-lock" />
                    <input type='password' placeholder='Slaptažodis' className='passwordText' onChange={event => handlePasswordChange(event.target.value)}/>
                </div>
                <div className='outterButton'>
                    <div className='innerButton'>
                        <button className='loginButton1' onClick={handleLogin}>Prisijunk</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login;