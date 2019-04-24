import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom'

const Footer = props => {
  return (
  	<Grid container justify="center" spacing={24}>
	  <Grid className="footer-wrapper" item xs={12}>
	  	<div className="footer">
	  	  <Typography variant="h6">© Spampinato Design</Typography>
	  	</div>
	  </Grid>
	</Grid>
  )
}

export default Footer