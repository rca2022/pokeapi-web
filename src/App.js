import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './pattern.png';

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';


class App extends Component{
  render() {
    return (
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
            <div className="container">
                <Dashboard />
            </div>
        </div>
    );
  }
}
export default App;
