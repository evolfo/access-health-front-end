import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />  
            <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
