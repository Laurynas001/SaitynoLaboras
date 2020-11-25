import React from 'react';
import Axios from 'axios';  
import Cookies from 'universal-cookie';
import './Login.css';

const cookies = new Cookies();

class Login extends React.Component {
    state = {
        username: '',
        password: ''
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
    
    handleLogin() {
        Axios.post(`https://localhost:5001/Login`, this.state).then(res => {
            cookies.set("accessToken", res.data.accessToken);
            cookies.set("refreshToken", res.data.refreshToken);
            console.log(res);
            console.log(cookies.get("accessToken"));
            console.log(cookies.get("refreshToken"));
        });
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='parentDiv'>
                <div className='loginComponent'>
                    <div className='title'>Prisijungimas</div>
                    <div className='outterUsername'>
                        <i className="fas fa-user-alt" />
                        <input type='text' placeholder='Naudotojo vardas' className='usernameText' onChange={event => this.handleUsernameChange(event.target.value)} />
                    </div>
                    <div className='outterPassword'>
                        <i className="fas fa-lock" />
                        <input type='password' placeholder='Slaptažodis' className='passwordText' onChange={event => this.handlePasswordChange(event.target.value)} />
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