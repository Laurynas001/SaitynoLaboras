import React from 'react';
import './GasStations.css';
import Axios from 'axios';

function GasStations() {
    const state = {
        gasStations: []
    }

    function componentDidMount() {
        Axios.get()
    }
    return (
        <div>This is gasStations</div>
    );
}

export default GasStations;