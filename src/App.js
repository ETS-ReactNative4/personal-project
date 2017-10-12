import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import router from './router'
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contactUs' component={ContactUs} />
        </Switch>
      </div>
    );
  }
}

export default App;
