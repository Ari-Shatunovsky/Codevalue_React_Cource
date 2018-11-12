import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Открой <code>src/App.js</code> и напиши там всякую хуйню.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            УЧИ РЕАКТ СУКА!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
