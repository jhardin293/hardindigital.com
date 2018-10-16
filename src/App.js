import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="wrapper container">
            <img src={logo}  alt="logo" width="164" height="22" />
            <div className="menu">
              <a href="#">Our Work</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>

            </div>
          </div>
        </nav>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
