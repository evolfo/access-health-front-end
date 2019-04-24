import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const BrowseCard = props => {
  return (
    <Grid key={props.campaign.id} id="browse-cards" item xs={12}>
	    <Card>
	      <CardActionArea>
	    <CardMedia
	      className="home-card"
	      image="/img/placeholder3.jpg"
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
	</Card>
  </Grid>
  )
}

export default BrowseCard