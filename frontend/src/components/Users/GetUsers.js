import React from 'react'
import './GetUsers.css';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import RefreshToken from '../Token/RefreshToken';
import DeleteUser from './DeleteUser';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}

class GetUsers extends React.Component {
    state = {
        users: []
    }

    counter = 0;

    componentDidMount() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.get(`https://localhost:5001/Users`, config).then(res => {
             this.setState({
                    users: res.data
             })
            });
    }

    render() {
        return (
        RefreshToken(),
        <div className='usersOutterDiv'>    
            <div className='usersInnerDiv'>
                <h1 className='usersTitle'>Naudotojai</h1>
                <table className='usersTable'>
                    <thead>
                        <tr>
                            <th>Nr.</th>
                            <th>Naudotojo vardas</th>
                            <th>Elektroninis paštas</th>
                            <th>Rolė</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.counter = 0,
                                this.state.users.map((item) => (
                                <tr key={item.id}>
                                    <td>{this.counter += 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <div className='userChangeValues' key={item.id + 'changeValues'}>
                                            <Link to={{pathname: '/changeUser', state: item}} className='iconLink'>
                                                <i className="fas fa-cog" />
                                            </Link>
                                            <i className="fas fa-trash-alt" onClick={event => DeleteUser(item)}/>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link to={{pathname: '/changeUser'}} className='newUserButton'>
                    Pridėti naują
                </Link>
            </div>
        </div>
    );
}
}

export default GetUsers;