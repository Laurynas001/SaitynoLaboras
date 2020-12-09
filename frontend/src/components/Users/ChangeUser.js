import React from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import './ChangeUser.css';
import RefreshToken from '../Token/RefreshToken';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}
    
class ChangeUser extends React.Component {
    state = {
            username: this.props.location.state.username,
            email: this.props.location.state.email,
            password: this.props.location.state.password,
            //role: this.props.location.state.role,
        }

    handleUsernameChange(value) {
        this.setState({
            username: value,
        })
    }

    handleEmailChange(value) {
        this.setState({
            email: value,
        })
    }

    handleRoleChange(value) {
        this.setState({
            role: value,
        })
    }

    handlePasswordChange(value) {
        this.setState({
            password: value,
        })
    }

    changeUser() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.put(`https://localhost:5001/Users/` + this.props.location.state.id, this.state, config).then(res => {
            console.log(res.data);
        });
    };

    render() {
        return (
            RefreshToken(),
            <div className='changeUserOutterDiv'>
                <div className='changeUserInnerDiv'>
                    <div className='changeUserTitleDiv'>
                        <div className='changeUserTitle'>Koreguoti naudotoją</div>
                    </div>
                    <div className='changeUserInputDiv'>
                        <label className='inputLabel'>Naudotojo vardas</label>
                        <input type='text' placeholder='Naudotojo vardas' value={this.state.username} className='changeUserInput' onChange={event => this.handleUsernameChange(event.target.value)} />
                    </div>
                    <div className='changeUserInputDiv'>
                        <label className='inputLabel'>Elektroninis paštas</label>
                        <input type='text' placeholder='Elektroninis paštas' value={this.state.email} className='changeUserInput' onChange={event => this.handleEmailChange(event.target.value)} />
                    </div>
                    {/* <div className='changeUserInputDiv'>
                        <label className='inputLabel'>Rolė</label>
                        <input type='text' placeholder='Rolė' value={this.state.role} className='changeUserInput' onChange={event => this.handleRoleChange(event.target.value)} />
                    </div> */}
                    <div className='changeUserInputDiv'>
                        <label className='inputLabel'>Slaptažodis</label>
                        <input type='text' placeholder='Slaptažodis' value={this.state.password} className='changeUserInput' onChange={event => this.handlePasswordChange(event.target.value)} />
                    </div>
                    <div className='changeUserButtonDiv'>
                        <button className='changeUserButton' onClick={event => this.changeUser()}>Išsaugoti</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangeUser;