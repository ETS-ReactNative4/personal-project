import React, { Component } from 'react';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import router from './router'
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from './ducks/reducer';
import { withRouter } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
        this.props.getUserInfo()
}
  render() {
    return (
      <div className="App">
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

function mapStateToProps(state) {
  if (!state) return {};
  return {users: state.users};
}


export default withRouter(connect(mapStateToProps, { getUserInfo })(App));
