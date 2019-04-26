import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProgressBar from '../home/ProgressBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';

class CampaignPage extends Component {

  state = {
  	title: '',
  	description: '',
  	editTitleDisplayed: false,
  	editDescriptionDisplayed: false
  }

  handleEditTitleClick = () => {
  	return (
  	  <form>
		  <DialogContent>
		    <TextField
		      required
		      autoFocus
		      margin="dense"
		      label="Email Address"
		      type="email"
		      fullWidth
		      value={this.state.email}
		      onChange={this.handleChange}
		    />
	  	  </DialogContent>
	  </form>
  	)
  }

  handleEditDescriptionClick = () => {

  }

  render (){
  	const currentTitle = this.props.match.params.campaignTitle.split('-').join(' ')
  
  	const user = this.props.users.user

  	const campaign = this.props.campaigns.campaigns.find(campaign => {
  	  return currentTitle === campaign.title.toLowerCase()
  	}, () => this.setState({ title: campaign.title, description: campaign.description}))

  	console.log(user.id)
  	console.log(campaign.user_id)
  	// const amountLeft = campaign.goal - campaign.current_amount

  	const imgBackgroundStyle = {
  	  background: `url('http://localhost:3000${campaign.photoUrl}')`,
  	  padding: '15rem',
  	  backgroundSize: 'cover'
  	}

  	console.log(this.state)

  	if (user.id !== campaign.user_id) {
  		return(
  		  <React.Fragment>
	  	 	<div className="container">
	  	 		<section id="campaign-page">
		  	  	  <Grid container direction="row" justify="center" alignItems="center">
		  	  	  	<Grid item xs={9}>
		  	  	  	  <ProgressBar goal={campaign.goal} amount={campaign.current_amount} percentComplete={campaign.percent_complete} />
		  	  	  	</Grid>
		  	  	    <Grid item xs={7}>
		  	  	      <Typography variant="h5">
		  	  	  	    Campaign ends on {campaign.ends}
		  	  	  	  </Typography>
			  	      <Card className="campaign-page-card">
					      <div style={imgBackgroundStyle}>
					      </div>
					      <CardContent>
			    	        <Typography gutterBottom variant="h5" component="h2">
				              {campaign.title}
				              <Button onClick={this.handleEditTitleClick}>
				              	<CreateIcon />
				              </Button>
					        </Typography>
					        <Typography component="p">
					          {campaign.description}
					          <Button onClick={this.handleEditDescriptionClick}> 
					          	<CreateIcon />
					          </Button>
					        </Typography>

					        <Typography variant="overline" gutterBottom>
						      Campaign by {campaign.owner}
					        </Typography>
					      </CardContent>
					  </Card>
			  	    </Grid>
			  	  </Grid>
			  	</section>
		  	</div>
	  	  </React.Fragment>
  		)
  	} else {
	  	return(
	  	  <React.Fragment>
	  	 	<div className="container">
	  	 		<section id="campaign-page">
		  	  	  <Grid container direction="row" justify="center" alignItems="center">
		  	  	  	<Grid item xs={9}>
		  	  	  	  <ProgressBar goal={campaign.goal} amount={campaign.current_amount} percentComplete={campaign.percent_complete} />
		  	  	  	</Grid>
		  	  	    <Grid item xs={7}>
		  	  	      <Typography variant="h5">
		  	  	  	    Campaign ends on {campaign.ends}
		  	  	  	  </Typography>
			  	      <Card className="campaign-page-card">
					      <div style={imgBackgroundStyle}>
					      </div>
					      <CardContent>
			    	        <Typography gutterBottom variant="h5" component="h2">
				              {campaign.title}
					        </Typography>
					        <Typography component="p">
					          {campaign.description}
					        </Typography>
					        <Typography variant="overline" gutterBottom>
						      Campaign by {campaign.owner}
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

export default connect(mapStateToProps)(CampaignPage)