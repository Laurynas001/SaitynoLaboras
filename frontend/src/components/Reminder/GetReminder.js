import React from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import ReminderCard from './ReminderCard';

const cookies = new Cookies();
const config = {
        headers: {
            'Authorization': 'Bearer ' + cookies.get('accessToken')
        }
}

class GetReminder extends React.Component {
     state = {
       reminders: null
   }
   
    componentDidMount() {
        var chart = this.chart;
        Axios.get(`https://localhost:5001/Users/` + this.props.location.state.id + `/Reminders`, config)
            .then(res => {
                this.setState({
                    reminders: res.data
                })
            })
    };



    render() {
        return (
            <div className='outterDiv'>
                <div className='innerDiv'>
                {
                    reminders.map(reminder => ReminderCard(gasStation))
                }           
                </div>
            </div> 
        );
    }
}

export default GetReminder;