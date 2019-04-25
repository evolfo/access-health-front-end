import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { creatingCampaign } from '../actions/campaignActions';

class CreateCampaignContainer extends Component {

  state = {
  	title: '',
  	description: '',
  	goal: 0,
  	user_id: this.props.users.user.id
  }

  handleChange = (e) => {
  	this.setState({
  	  [e.target.id]: e.target.value
  	})
  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	this.setState({
  	  title: '',
  	  description: '',
  	  goal: 0
  	})
  	this.props.creatingCampaign(this.state)
  }

  render(){
  	return(
  	  <div className="container"> 
  	  	<section id="create-campaign">
	  	  	<Grid container direction="row" justify="center" alignItems="center">
		  	  <Grid item xs={10}>
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
			      <Button onClick={this.handleSubmit} variant="outlined" color="primary" className="">
			        Submit
			      </Button>
	  	  	  </Grid>
	  	  	</Grid>
	  	</section>
  	  </div>
  	)
  }
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps, { creatingCampaign })(CreateCampaignContainer)