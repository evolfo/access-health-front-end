import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const CampaignCard = props => {
  return (
  	<Grid item xs={4}>
      <Card>
	    <CardActionArea>
	      <CardMedia
	        className="home-card"
	        image="/img/placeholder1.jpg"
	        title={props.campaign.title}
	      />
	      <CardContent>
	        <Typography gutterBottom variant="h6" component="h2">
	          {props.campaign.title}
	        </Typography>
		    <Typography component="p">
	          {props.campaign.description}
	        </Typography>
	      </CardContent>
	    </CardActionArea>
	  <ProgressBar percentComplete={props.campaign.percent_complete} />
	  </Card>
    </Grid>
  )
}

export default CampaignCard