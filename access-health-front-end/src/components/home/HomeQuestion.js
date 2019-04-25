import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const HomeBackground = props => {
  return (
  	<React.Fragment>
  	  <Grid container justify="center" spacing={24}>
	  	<Grid id="no-padding"  item xs={12}>
	  	  <div className="home-create-campaign">
	  	  	<Typography variant="h6">
	  	  	  Are you in debt because of medical bills?
	  	  	</Typography>
	  	  	<Link to='/create-campaign'>
	 	 	  <Button variant="outlined" className="">
	    		Create a Campaign
	  		  </Button>
	  		</Link>
	  	  </div>
	  	</Grid>
	  </Grid>
    </React.Fragment>
  )
}

export default HomeBackground