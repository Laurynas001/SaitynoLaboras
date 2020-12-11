import React from 'react';
import Axios from 'axios';  
import Cookies from 'universal-cookie';
import './SuccessModal.css';
import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';

const cookies = new Cookies();
class SuccessModal extends React.Component {
    state = {
        toggle: true
    }

    showModal(value) {
        this.setState({
            toggle: value
        })
    }

    ifToggle(value) {
        if (this.state.toggle == true) {
            return true
        }
    }


    
    render() {
        return (
            this.state.toggle ?
                <div className='outterDivSuccess'>
                        <div className='modalSuccessInnerDiv'>
                            <div className='modalSuccessText'>
                                Jūs sėkmingai prisiregistravote sistemoje.
                        </div>
                            <div className='postUserButtonDiv'>
                                <button className='postUserButton' onClick={event => this.showModal(false)}>Gerai</button>
                            </div>
                            <div></div>
                        </div>
                </div>
                     :
                    ''
            );
    }
}

export default SuccessModal;