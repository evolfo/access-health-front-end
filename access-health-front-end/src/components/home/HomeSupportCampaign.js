import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar'

const HomeSupportCampaign = props => {

  let homeCampaigns = []
  let homeCampaignsGenerator

  for (let i = 0; i < 3; i++) {
  	homeCampaigns.push(props.campaigns.campaigns[i])
  }

  if (homeCampaigns[0]) {
	  homeCampaignsGenerator = homeCampaigns.map(campaign => {
	  	return (
	  		<Grid key={campaign.id} item xs={4}>
		      <Card>
			    <CardActionArea>
			      <CardMedia
			        className="home-card"
			        image="/img/placeholder1.jpg"
			        title={campaign.title}
			      />
			      <CardContent>
			        <Typography gutterBottom variant="h6" component="h2">
			          {campaign.title}
			        </Typography>
				    <Typography component="p">
			          {campaign.description}
			        </Typography>
			      </CardContent>
			    </CardActionArea>
			  <ProgressBar />
			  </Card>
		    </Grid>
	  	)
	  })
    }

  return (
  	<React.Fragment>
  	  <Grid className="campaigns-to-support" container spacing={24}>
	  	  <Grid item xs={12}>
	  	    <Typography variant="h4">Campaigns to Support</Typography>
	  	    <Grid id="campaigns-to-support" item xs={10}>
	  	      {homeCampaignsGenerator}
	  	    </Grid>
	  	  </Grid>
	  	</Grid>
    </React.Fragment>
  )
}

export default HomeSupportCampaign