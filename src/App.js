import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Bikes from './components/Bikes';
import Contact from './components/Contact';
import Cars from './components/Cars';
import SmallTown from './components/SmallTown';
import Events from './components/Events';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Bikes' component={Bikes} />
            <Route path='/Cars' component={Cars} />
            <Route path='/SmallTown' component={SmallTown} />
            <Route path='/Events' component={Events} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
