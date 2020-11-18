import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          <Route path='/gasStations' />
          <Route path='/prices' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
