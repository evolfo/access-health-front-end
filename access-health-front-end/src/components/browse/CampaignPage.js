import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProgressBar from '../home/ProgressBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';

import { StripeProvider, Elements } from 'react-stripe-elements';

import { editingCampaign, deleteCampaign, loadCampaigns } from '../../actions/campaignActions'
import Donate from './Donate'

class CampaignPage extends Component {

  state = {
  	title: '',
  	description: '',
  	editDisplayed: false,
  	campaign: {}
  }

  componentDidMount(){
  	const currentTitle = this.props.match.params.campaignTitle.split('-').join(' ')
  	const campaign = this.props.campaigns.campaigns.find(campaign => {
  	  return currentTitle === campaign.title.toLowerCase()
  	})

  	console.log(this.props.campaigns)

  	if (campaign) {
  		let urlEnding = campaign.title.split(' ').join('-').toLowerCase()

	  	this.setState({
	  	  campaign: campaign,
	  	  title: campaign.title,
	  	  description: campaign.description
	  	})
	  	this.props.history.push(`/browse/${urlEnding}`)
	}
  }

  handleEditClick = () => {
  	this.setState({  		
  	  editDisplayed: !this.state.editDisplayed
  	})
  }


  handleChange = (e) => {
  	this.setState({
  	  [e.target.id]: e.target.value})
  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	this.setState({
  	  editDisplayed: false
  	})
  	this.props.editingCampaign(this.state.title, this.state.description, this.state.campaign.id)
  }

  handleDelete = () => {
  	this.props.deleteCampaign(this.state.campaign.id)
  	this.props.history.push('/')
  }

  render (){
  
  	const user = this.props.users.user
  	console.log(this.state.campaign)
  	const imgBackgroundStyle = {
  	  background: `url('http://localhost:3000${this.state.campaign.photoUrl}')`,
  	  padding: '15rem'
  	}

  	// This statement renders if the campaign is owned by the current user that is logged in
  	// Allows the user to edit the title and description of their own campaign
  	if (user.id === this.state.campaign.user_id) {
  		return(
  		  <React.Fragment>
	  	 	<div className="container">
	  	 	  <div class="pyro">
  			   <div class="before"></div>
  			   <div class="after"></div>
	  	 		<section id="campaign-page">
		  	  	  <Grid container direction="row" justify="center" alignItems="center">
		  	  	  	<Grid item xs={10}>
		  	  	  	  <ProgressBar campaignId={this.state.campaign.id} goal={this.state.campaign.goal} amount={this.state.campaign.current_amount} percentComplete={this.state.campaign.percent_complete} />
		  	  	  	</Grid>
		  	  	    <Grid item xs={8}>
		  	  	      <Typography variant="h5">
		  	  	  	    Campaign ends on {this.state.campaign.ends}
		  	  	  	  </Typography>
			  	      <Card className="campaign-page-card">
					      <div style={imgBackgroundStyle}>
					      </div>
					      <CardContent>
			    	        <Typography gutterBottom variant="h4" component="h2">
				              {this.state.title}
				              {this.state.editDisplayed
				               ? 
					              <form>
									  <DialogContent>
									    <TextField
									      required
									      id="title"
									      autoFocus
									      margin="dense"
									      label="Title"
									      type="text"
									      fullWidth
									      variant="filled"
									      value={this.state.title}
									      onChange={this.handleChange}
									    />
									    <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
								  	  </DialogContent>

								  </form> :
								  null
							  }
				              {!this.state.editDisplayed ? 
				              <Button onClick={this.handleEditClick}>
				              	<CreateIcon />
				              </Button>
				              : null}
					        </Typography>
					        <Typography variant="body1">
					          {this.state.description}
					          {this.state.editDisplayed
				               ? 
					              <form>
									  <DialogContent>
									    <TextField
									      required
									      id="description"
									      autoFocus
									      margin="dense"
									      label="Description"
									      type="text"
									      fullWidth
									      variant="filled"
									      multiline={true}
				          				  rows={4}
				          				  rowsMax={20}
									      value={this.state.description}
									      onChange={this.handleChange}
									    />
									    <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
								  	  </DialogContent>
								  	  <Button variant="contained" color="secondary" onClick={this.handleDelete}>Delete Campaign</Button>
								  </form> :
								  null
							  }
					        </Typography>

					        <Typography variant="overline" gutterBottom>
						      Campaign by {this.state.campaign.owner}
					        </Typography>
					      </CardContent>
					  </Card>
			  	    </Grid>
			  	  </Grid>
			  	</section>
			  </div>
		  	</div>
	  	  </React.Fragment>
  		)
  	// This renders if the campaign is not owned by the user viewing the page
  	} else {
	  	return(
	  	  <React.Fragment>
	  	 	<div className="container">
	  	 		<section id="campaign-page">
		  	  	  <Grid container direction="row" justify="center" alignItems="center">
		  	  	  	<Grid item xs={10}>
		  	  	  	  <ProgressBar campaignId={this.state.campaign.id} goal={this.state.campaign.goal} amount={this.state.campaign.current_amount} percentComplete={this.state.campaign.percent_complete} />
		  	  	  	</Grid>
		  	  	    <Grid item xs={8}>
		  	  	      <Typography variant="h5">
		  	  	  	    Campaign ends on {this.state.campaign.ends ? this.state.campaign.ends.split(' ').splice(0, 3).join(' ') : null}
		  	  	  	  </Typography>
		  	  	  	  <StripeProvider apiKey="pk_test_nxHkl553mJngNLPoDgeYG9aP00oaY8CYJm">
			  	  	  	  <Elements> 
			  	  	  	  	<Donate campaign={this.state.campaign}/>
			  	  	  	  </Elements>
			  	  	  </StripeProvider>
			  	      <Card className="campaign-page-card">
					      <div style={imgBackgroundStyle}>
					      </div>
					      <CardContent>
			    	        <Typography gutterBottom variant="h4" component="h2">
				              {this.state.campaign.title}
					        </Typography>
					        <Typography variant="body1" gutterBottom>
					          {this.state.campaign.description}
					        </Typography>
					        <Typography variant="overline" gutterBottom>
						      Campaign by {this.state.campaign.owner}
					        </Typography>
					      </CardContent>
					  </Card>
			  	    </Grid>
			  	  </Grid>
			  	</section>
		  	</div>
	  	  </React.Fragment>
	  	)
	  }
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { editingCampaign, deleteCampaign, loadCampaigns })(withRouter(CampaignPage))

