import React, { Component } from 'react'
import HomeBackground from '../components/home/HomeBackground'
import HomeQuestion from '../components/home/HomeQuestion'
import HomeSupportCampaign from '../components/home/HomeSupportCampaign'
import About from '../components/home/About'
import HowItWorks from '../components/home/HowItWorks'

import { connect } from 'react-redux'
import { loadCampaigns } from '../actions/campaignActions'
import store from '../index'

class Home extends Component {

  componentDidMount() {
  	this.props.loadCampaigns()
  }

  render(){
  	return(
  	  <React.Fragment>
  	  	<HomeBackground />
  	  	<HomeQuestion />
  	  	<HomeSupportCampaign campaigns={this.props.campaigns} />
        <About />
        <HowItWorks />
  	  </React.Fragment>
  	)
  }
}

const mapStateToProps = state => {
  return {
  	campaigns: state.campaigns
  }
}
 
export default connect(mapStateToProps, { loadCampaigns })(Home);