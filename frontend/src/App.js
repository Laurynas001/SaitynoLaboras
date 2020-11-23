import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import GasStations from './components/GasStation/GasStations';
import Prices from './components/Prices/Prices';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Logout from './components/Logout/Logout';

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
          <Route path='/logout' component={Logout} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
