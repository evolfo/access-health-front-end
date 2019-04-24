import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

import { getAllUsers } from './actions/userActions'

class App extends Component {

  componentDidMount() {
    this.props.getAllUsers()
  }
 
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />  
          <Routes users={this.props.users} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { getAllUsers })(App);
