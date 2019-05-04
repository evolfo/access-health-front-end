import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const About = props => {
  return (
  	<Grid id="about" container justify="center" spacing={24}>
	  <Grid id="no-padding" item xs={6}>
	    <div class="about">
	      <Typography variant="h4" gutterBottom>About Us</Typography>
	        <Typography variant="subtitle1">
       	      At Access Health we believe in the right for everyone to have equal access to 
       	      quality healthcare regardless of background and economic status. There are many 
       	      people in medical debt and we aim to help as many of them as we can.
	        </Typography>
	    </div>
	  </Grid>
	</Grid>
  )
}

export default About