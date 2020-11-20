import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import GasStations from './components/GasStation/GasStations';
import Prices from './components/Prices/Prices';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/gasStations' component={GasStations} />
          <Route path='/prices' component={Prices} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
