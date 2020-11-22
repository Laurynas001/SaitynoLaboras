import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='parentDiv'>
            <div className='loginComponent'>
                <div className='title'>Prisijungimas</div>
                <div className='outterUsername'>
                    <i className="fas fa-user-alt"/>
                    <input type='text' placeholder='Naudotojo vardas' className='usernameText'/>
                </div>
                <div className='outterPassword'>
                    <i className="fas fa-lock" />
                    <input type='password' placeholder='Slaptažodis' className='passwordText' />
                </div>
                <div className='outterButton'>
                    <div className='innerButton'>
                        <button className='loginButton1'>Prisijunk</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;