import React, { Component } from 'react'
import HomeBackground from '../components/home/HomeBackground'
import HomeQuestion from '../components/home/HomeQuestion'
import HomeSupportCampaign from '../components/home/HomeSupportCampaign'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { spacing } from '@material-ui/system';

export default class Home extends Component {
  render(){
  	return(
  	  <React.Fragment>
  	  	<HomeBackground />
  	  	<HomeQuestion />
  	  	<HomeSupportCampaign />
  	  </React.Fragment>
  	)
  }
}