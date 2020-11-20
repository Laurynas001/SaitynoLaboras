import React from 'react';
import './SideNavbarButton.css';

function SideNavbarButton(props) {
    return (
        <button className='hamburgerButton' onClick={props.click}>
            <i className='fas fa-bars' />
        </button>

    );
} 

export default SideNavbarButton;