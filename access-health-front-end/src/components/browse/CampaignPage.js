import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProgressBar from '../home/ProgressBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class CampaignPage extends Component {

  render (){
  	console.log(this.props.campaigns)
  	const currentTitle = this.props.match.params.campaignTitle.split('-').join(' ')
  
  	const campaign = this.props.campaigns.find(campaign => {
  	  return currentTitle === campaign.title.toLowerCase()
  	})
  	// const amountLeft = campaign.goal - campaign.current_amount

  	const imgBackgroundStyle = {
  	  background: `url('http://localhost:3000${campaign.photoUrl}')`,
  	  padding: '15rem',
  	  backgroundSize: 'cover'
  	}

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

const mapStateToProps = state => {
  return state.campaigns
}

export default connect(mapStateToProps)(CampaignPage)