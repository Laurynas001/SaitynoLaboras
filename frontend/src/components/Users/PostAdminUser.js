import React from 'react';
import Axios from 'axios';  
import Cookies from 'universal-cookie';
import './PostUser.css';

const cookies = new Cookies();
class PostAdminUser extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        role: ''
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

    handleRoleChange(value) {
        this.setState({
            role: value
        })
    }
    
    postUser() {
        Axios.post(`https://localhost:5001/Users`, this.state).then(res => {
                this.props.history.push('/login');
                window.location.reload();
        })
        this.setState({
            username: '',
            password: '',
            email: ''
        })
    }

    render() {
        return (
             <div className='postUserOutterDiv'>
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
                        <input type='password' placeholder='Pakartotinas slaptažodis' value={this.state.password2} className='postUserInput' />
                    </div>
                    <div className='postUserButtonDiv'>
                        <button className='postUserButton' onClick={event => this.postUser()}>Registruotis</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostAdminUser;