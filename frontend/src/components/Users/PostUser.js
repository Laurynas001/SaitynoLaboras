import React from 'react';
import Axios from 'axios';  
import Cookies from 'universal-cookie';
import './PostUser.css';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import SuccessModal from './SuccessModal';

const cookies = new Cookies();
class PostUser extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        role: 'User'
    }

    state1 = {
        password2: '',
    }

    toggleSuccessModal = {
        toggle: false
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

    handleEmailChange(value) {
        this.setState({
            email: value
        })
    }

     handleToggleChange(value) {
        this.setState({
            toggle: value
        })
    
    }

    handlePassword2Change(value) {
        this.setState({
            password2: value
        })
    }
    
    postUser() {
        Axios.post(`https://localhost:5001/Users`, this.state).then(res => {
                    this.setState(this.toggleSuccessModal = {
                        toggle: !this.state.toggle
                    })
        })
        this.setState({
            username: '',
            password: '',
            email: '',
            password2: ''
        })
    }

    render() {
        return (
            <div className='postUserOutterDiv'>
                {this.toggleSuccessModal.toggle ?
                <SuccessModal/> : ''
                }
                <div className='postUserInnerDiv'>
                    <div className='postUserTitleDiv'>
                        <div className='postUserTitle'>Registravimasis</div>
                    </div>
                    <div className='postUserInputDiv'>
                        <input type='text' placeholder='Naudotojo vardas' value={this.state.username} className='postUserInput' onChange={event => this.handleUsernameChange(event.target.value)} />
                    </div>
                    <div className='postUserInputDiv'>
                        <input type='email' placeholder='Elektroninis paštas' value={this.state.email} className='postUserInput' onChange={event => this.handleEmailChange(event.target.value)} />
                    </div>
                    <div className='postUserInputDiv'>
                        <input type='password' placeholder='Slaptažodis' value={this.state.password} className='postUserInput' onChange={event => this.handlePasswordChange(event.target.value)} />
                    </div>
                    <div className='postUserInputDiv'>
                        <input type='password' placeholder='Pakartotinas slaptažodis' value={this.state.password2} className='postUserInput' onChange={event => this.handlePassword2Change(event.target.value)}/>
                    </div>
                    <div className='postUserButtonDiv'>
                        <button className='postUserButton' onClick={event => this.postUser()}>Registruotis</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostUser;