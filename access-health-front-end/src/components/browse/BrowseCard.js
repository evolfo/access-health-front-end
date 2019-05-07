import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Route, Switch } from 'react-router-dom';
import ProgressBar from '../../components/home/ProgressBar'

import CampaignPage from './CampaignPage'

const BrowseCard = props => {

  const styles = {
  	overlay: {
  	  position: 'absolute',
  	  color: 'black',
  	  fontSize: '1.8rem',
	  position: 'absolute',
	  color: 'white',
	  textShadow: '2px 2px 2px black',
	  bottom: '0',
	  margin: '0 auto',
	  textAlign: 'center',
	  width: '100%',
	  marginTop: '-2px',
	  backgroundColor: '#00000066',
  	},

  	p: {
  	  marginBottom: '11px'
  	}
  }
  // Prevents completed campaigns from showing up on the browse page
  if (props.campaign.successful && props.fromBrowse) {
  	return null
  } else {
	  return (
	    <Grid key={props.campaign.id} id="browse-cards" item xs={12}>
		  <Card className="browse-campaign-card">
		    <CardActionArea>
		      <CardMedia
		        className="home-card"
		        image={`https://access-health-api.herokuapp.com${props.campaign.photoUrl}`}
		        title={`${props.campaign.title}` }
		      />
		      <div style={styles.overlay}>
		        {props.campaign.title.length > 25 ? 
		          <p style={styles.p}>{`${props.campaign.title.slice(0, 25) + '...'} // $${props.campaign.amount_left_to_fund} left to fund`}</p>
		        :	
		          <p style={styles.p}>{`${props.campaign.title} // $${props.campaign.amount_left_to_fund} left to fund`}</p>
		        }
		      </div>
		      <CardContent>
		        <Typography gutterBottom variant="h6" component="h2">
		          {props.campaign.title}
		        </Typography>
			    <Typography component="p">
		          {props.campaign.description.slice(0, 100) + '...'}
		        </Typography>
		      </CardContent>
		    </CardActionArea>
		  </Card>
		  	<Switch>
			  
		    </Switch>
	    </Grid>
	  )
	}
}

export default BrowseCard