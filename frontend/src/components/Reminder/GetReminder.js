import React from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import ReminderCard from './ReminderCard';
import './GetReminder.css';
import RefreshToken from '../Token/RefreshToken';

const cookies = new Cookies();
const config = {
        headers: {
        'Authorization': 'Bearer ' + cookies.get('accessToken')
    }
}

class GetReminder extends React.Component {
     state = {
       reminders: []
    }
   
    componentDidMount() {
        config.headers.Authorization = 'Bearer ' + cookies.get('accessToken');
        Axios.get(`https://localhost:5001/Users/` + cookies.get('userId') + `/Reminders`, config)
            .then(res => {
                this.setState({
                    reminders: res.data
                })
            })
    };


    render() {
        return (
            RefreshToken(),
            <div className='outterDiv'>
                <div className='reminderCardInnerDiv'>
                {
                    this.state.reminders.map(reminder => ReminderCard(reminder))
                }  
                </div>
            </div> 
        );
    }
}

export default GetReminder;