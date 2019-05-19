import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { DropzoneArea } from 'material-ui-dropzone'

import Loader from '../components/Loader'
import { creatingCampaign, loadCampaigns } from '../actions/campaignActions';
import { loadingStart, loadingEnd } from '../actions/loaderActions';

class CreateCampaignContainer extends Component {

  state = {
  	title: '',
  	description: '',
  	goal: 0,
  	user_id: this.props.users.user.id,
  	photo: null
  }

  handleChange = (e) => {
  	this.setState({
  	  [e.target.id]: e.target.value
  	})
  }

  handleSubmit = (e) => {
  	e.preventDefault()

  	this.props.loadingStart()

  	let urlEnding = this.state.title.split(' ').join('-').toLowerCase()

  	const formData = new FormData()
  	formData.append('campaign[title]', this.state.title)
  	formData.append('campaign[description]', this.state.description)
  	formData.append('campaign[goal]', this.state.goal)
  	formData.append('campaign[user_id]', parseInt(this.state.user_id))
  	formData.append('campaign[photo]', this.state.photo)

  	this.props.creatingCampaign(formData).then(() => {
  		this.props.loadCampaigns().then(() => {
  			this.props.loadingEnd()
  			this.props.history.push(`/browse/${urlEnding}`)
  		})
  	  }
  	)
  	

  	this.setState({
  	  title: '',
  	  description: '',
  	  goal: 0,
  	  photo: null
  	})
  }

  handleUpload = (e) => {
  	this.setState({
  	  photo: e[0]
  	})
  }

  render(){

  	// If statement allows users to see this page only if they are logged in

  	if (localStorage.token) {
	  	return(
	  	  <div className="container"> 
	  	  	<section id="create-campaign">
		  	  	<Grid container direction="row" justify="center" alignItems="center">
			  	  <Grid item xs={8}>
			  	  	<Typography variant="h4" gutterBottom>Create a new Access Health Campaign</Typography>
		  	  		  <form className="create-campaign-form" noValidate autoComplete="off">
				        <TextField
				          required
				          id="title"
				          label="title"
				          className=""
				          value={this.state.title}
				          margin="normal"
				          variant="filled"
				          onChange={this.handleChange}
				        />

				        <TextField
				          required
				          id="description"
				          label="description"
				          className=""
				          value={this.state.description}
				          margin="normal"
				          variant="filled"
				          multiline={true}
				          rows={4}
				          rowsMax={20}
				          onChange={this.handleChange}
				        />

				        <TextField
				          required
				          id="goal"
				          label="goal"
				          className=""
				          type="number"
				          value={this.state.goal}
				          margin="normal"
				          variant="filled"
				          onChange={this.handleChange}
				        />
				        
				      </form>
				      <DropzoneArea onChange={this.handleUpload} />
				      {this.props.loader.loading ? <Loader /> : null}
				      <Button onClick={this.handleSubmit} variant="outlined" color="primary" className="">
				        Submit
				      </Button>
		  	  	  </Grid>
		  	  	</Grid>
		  	</section>
	  	  </div>
	  	) 
  	} else {
  		this.props.history.push('/')
  		return(
  		  <div></div>
  		)
  		
  	}
  }
}

const mapStateToProps = state => {
	return state
}

export default withRouter(connect(mapStateToProps, { creatingCampaign, loadCampaigns, loadingStart, loadingEnd })(CreateCampaignContainer))