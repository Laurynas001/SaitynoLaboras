import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import GetGasStations from './components/GasStation/GetGasStations';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Logout from './components/Logout/Logout';
import PostGasStation from './components/GasStation/PostGasStation';
import ChangeGasStation from './components/GasStation/ChangeGasStation';
import GetPrices from './components/Prices/GetPrices';
import GetReminder from './components/Reminder/GetReminder';
import ChangeReminder from './components/Reminder/ChangeReminder';
import PostReminder from './components/Reminder/PostReminder';
import Home from './components/Home/Home';
import PostPrice from './components/Prices/PostPrice';
import ChangePrice from './components/Prices/ChangePrice';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/getGasStations' component={GetGasStations} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/postGasStations' component={PostGasStation} />
          <Route path='/changeGasStation' component={ChangeGasStation} />
          <Route path='/prices' component={GetPrices} />
          <Route path='/reminders' component={GetReminder} />
          <Route path='/changeReminder' component={ChangeReminder} />
          <Route path='/postReminder' component={PostReminder} />
          <Route path='/postPrice' component={PostPrice} />
          <Route path='/changePrice' component={ChangePrice} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
