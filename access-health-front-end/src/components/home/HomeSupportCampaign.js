import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const HomeSupportCampaign = props => {
  return (
  	<React.Fragment>
  	  <Grid className="campaigns-to-support" container spacing={24}>
	  	  <Grid item xs={12}>
	  	    <Typography variant="h4">Campaigns to Support</Typography>
	  	    <Grid id="campaigns-to-support" item xs={10}>
	  	      <Grid xs={4}>
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
				    <ProgressBar />
				</Card>
	  	      </Grid>
	  	      <Grid xs={4}>
	  	        <Card>
		  	        <CardActionArea>
				      <CardMedia
				        className="home-card"
				        image="/img/placeholder2.jpg"
				        title="Contemplative Reptile"
				      />
				      <CardContent>
				        <Typography gutterBottom variant="h6" component="h2">
				          Rare Condition
			            </Typography>
		       	        <Typography component="p">
				          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				        </Typography>
				      </CardContent>
				    </CardActionArea>
				    <ProgressBar />
				</Card>
	  	      </Grid>
	  	      <Grid xs={4}>
	  	        <Card>
		  	        <CardActionArea>
				      <CardMedia
				        className="home-card"
				        image="/img/placeholder3.jpg"
				        title="Contemplative Reptile"
				      />
				      <CardContent>
				        <Typography gutterBottom variant="h6" component="h2">
				          No Insurance
			            </Typography>
		       	        <Typography component="p">
				          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				        </Typography>
				      </CardContent>
				    </CardActionArea>
				    <ProgressBar />
				</Card>
	  	      </Grid>
	  	    </Grid>
	  	  </Grid>
	  	</Grid>
    </React.Fragment>
  )
}

export default HomeSupportCampaign