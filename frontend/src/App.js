import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import GetGasStations from './components/GasStation/GetGasStations';
import Prices from './components/Prices/Prices';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Logout from './components/Logout/Logout';
import PostGasStation from './components/GasStation/PostGasStation';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={GetGasStations}/>
          <Route path='/about' component={About} />
          <Route path='/getGasStations' component={GetGasStations} />
          <Route path='/prices' component={Prices} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/postGasStations' component={PostGasStation}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
