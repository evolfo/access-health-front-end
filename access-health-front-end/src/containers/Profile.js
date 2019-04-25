import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Profile extends Component { 

  generateDonations = () => {
  	return this.props.currentUser.donations.map(donation => {
  	  return (
  	  	<List>
          <ListItem>
            <ListItemText
              primary={`Campaign: ${donation.campaign_title}`}
              secondary={`by ${donation.campaign_owner}`}
            />
            <p>Amount: ${donation.amount}</p>
          </ListItem>
      	</List>
      )
  	})
  }

  render(){
  	console.log(this.props)
  	return(
  		<div className="container">
	  	  <section id="profile">
	        <Grid container justify="center" spacing={24}>
		  	    <Grid id="no-padding" item xs={12}>
  		  	    <Grid item xs={4}>
  		  	  	  <Typography variant="h4">Your Donations: </Typography>
  		  	  	  {this.generateDonations()}
  		  	    </Grid>
		  	    </Grid>
		      </Grid>
		    </section>
		  </div>
  	)
  }
}

export default Profile