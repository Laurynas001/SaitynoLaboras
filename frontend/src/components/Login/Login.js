import React from 'react';
import Axios from 'axios';  
import Cookies from 'universal-cookie';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';

const cookies = new Cookies();
class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
    }

    handleUsernameChange(value) {
        this.setState({
            username: value
        })
    }

    handlePasswordChange(value) {
        this.setState({
            password: value
        })
    }

    handleValues() {
        this.setState({
            username: '',
            password: ''
        })
    }
    
    handleLogin() {
        Axios.post(`https://localhost:5001/Login`, this.state).then(res => {
            cookies.set("accessToken", res.data.accessToken, {expires: 0});
            cookies.set("refreshToken", res.data.refreshToken, {expires: 0});
            cookies.set("userId", this.parseJwt(res.data.accessToken).Id, {expires: 0});
            cookies.set("accessTokenExpiration", this.parseJwt(res.data.accessToken).exp, {expires: 0});
            cookies.set("role", res.data.user.role, {expires: 0});
            if (cookies.get("accessToken") != null) {
                this.props.history.push('/');
                window.location.reload();

            }
        })
        this.setState({
        username: '',
        password: ''
        })

    }

    render() {
        return (
            <Navbar/>,
            <div className='parentDiv'>
                <div className='loginComponent'>
                    <div className='title'>Prisijungimas</div>
                    <div className='outterUsername'>
                        <i className="fas fa-user-alt" />
                        <input type='text' placeholder='Naudotojo vardas' value={this.state.username} className='usernameText' onChange={event => this.handleUsernameChange(event.target.value)} />
                    </div>
                    <div className='outterPassword'>
                        <i className="fas fa-lock" />
                        <input type='password' placeholder='Slaptažodis' value={this.state.password} className='passwordText' onChange={event => this.handlePasswordChange(event.target.value)} />
                    </div>
                    <div className='outterButton'>
                        <div className='innerButton'>
                            <button className='loginButton1' onClick={event => this.handleLogin()}>Prisijunk</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;