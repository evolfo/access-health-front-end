import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProgressBar from './ProgressBar'

const CampaignCard = props => {
  return (
  	<Grid item xs={4}>
  	  <CardActionArea className="campaign-card">
      	<Card>   
	      <CardMedia
	        className="home-card"
	        image={`https://access-health-api.herokuapp.com${props.campaign.photoUrl}`}
	        title={props.campaign.title}
	      />
	      <CardContent>
	        <Typography gutterBottom variant="h6" component="h2">
	          {props.campaign.title}
	        </Typography>
		    <Typography variant="body1">
	          {props.campaign.description.slice(0, 100) + '...'}
	        </Typography>
	      </CardContent>
	      <ProgressBar unique={props.campaign.title} campaignId={props.campaign.id} />
	    </Card>
	  </CardActionArea>
    </Grid>
  )
}

export default CampaignCard