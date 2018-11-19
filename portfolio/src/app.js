import React, { Component } from 'react';
import MainContent from './components/mainContent.jsx';
import SideBar from './components/sideBar.jsx';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-background"></div>
        <div className="app-container">
          <SideBar />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
