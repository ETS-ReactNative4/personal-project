import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <a href='http://localhost:3013/auth'>
          <button>Login</button>
        </a>
      </div>
    );
  }
}

export default App;
