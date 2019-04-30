import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

import { getAllUsers } from './actions/userActions'
import { getAllDonations } from './actions/donationActions'
import { loadCampaigns } from './actions/campaignActions'

class App extends Component {

  componentDidMount() {
    this.props.getAllUsers()
    this.props.getAllDonations()
    this.props.loadCampaigns()
  }
 
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />  
          <Routes campaigns={this.props.campaigns.campaigns} currentUser={this.props.users.user} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { getAllUsers, getAllDonations, loadCampaigns })(App);
