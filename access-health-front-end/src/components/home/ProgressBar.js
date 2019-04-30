import React from 'react'
import Filler from './Filler'
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const ProgressBar = props => {
	console.log(props)

  const campaign = props.campaigns.campaigns.find(campaign => {
  	return campaign.id === props.campaignId
  })
  if (campaign) {
	  return (
	  	<div className="progress-bar">
	  	  <Filler percentComplete={campaign.percent_complete} />
	  	  <Typography variant="h6">
	  	    {campaign.percent_complete}% done
	  	  </Typography>
	  	  <span>{campaign.current_amount ? `$${campaign.current_amount}/$${campaign.goal} goal` : null} </span>
	  	</div>
	  )
  } else {
  	return (null)
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ProgressBar)