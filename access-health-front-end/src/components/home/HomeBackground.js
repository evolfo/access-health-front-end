import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const HomeBackground = props => {
  return (
  	<React.Fragment>
	    <Grid container justify="center" spacing={24}>
	  	  <Grid item xs={12}>
	  	  	<div className="main-background">
	  	  	  <div>
	  	  	    <Typography variant="h3" gutterBottom>
			  Support some one in need.
		 	    </Typography>
		 	    <Typography variant="h5" gutterBottom>
		 	      People all over the U.S. need your help 
		 	      to pay off their medical debt. Support them and aid 
		 	      them in getting better today.
		 	    </Typography>
		 	    <Link to='/browse'>
	 	 	      <Button variant="outlined" className="">
	    			See Campaigns
	  			  </Button>
	  		    </Link>
		 	  </div>
	  	  	</div>
	  	  </Grid>
	  	</Grid>
	</React.Fragment>
  )
}

export default HomeBackground