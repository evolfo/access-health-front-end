import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default class Browse extends Component {
  render() {
    return (
      <React.Fragment>
      	<Grid spacing={0} direction="column" alignItems="center" className="browse-campaigns" container spacing={24}>
	  	  <Grid item xs={12}>
	  	    <Grid id="browse-cards" item xs={8}>
	  	      <Card>
	  	        <CardActionArea>
			      <CardMedia
			        className="home-card"
			        image="/img/placeholder1.jpg"
			        title="Contemplative Reptile"
			      />
			      <CardContent>
			        <Typography gutterBottom variant="h6" component="h2">
			          Chemotherapy Treatment
		            </Typography>
	       	        <Typography component="p">
			          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			        </Typography>
			      </CardContent>
			    </CardActionArea>
			  </Card>
	  	    </Grid>
	  	  </Grid>
	  	</Grid>
      </React.Fragment>
    )
  }
}