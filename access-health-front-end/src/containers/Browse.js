import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { loadCampaigns } from '../actions/campaignActions'
import { Link } from 'react-router-dom';

import Filter from '../components/browse/Filter' 
import BrowseCard from '../components/browse/BrowseCard'

class Browse extends Component {

  componentDidMount() {
  	this.props.loadCampaigns()
  }

  render() {

  	let allCampaigns;
  	if (this.props.campaigns.campaigns[0]) {
  	  allCampaigns = this.props.campaigns.campaigns.map(campaign => {
  	  	return (
  	  	  <Link to="#" key={campaign.id}>
  	  	    <BrowseCard campaign={campaign} />
  	  	  </Link>
  	  	)
  	  })
  	}

    return (
      <React.Fragment>
      	<Grid spacing={0} direction="column" alignItems="center" className="browse-campaigns" container spacing={24}>
	  	  <Grid item xs={12}>
	  	  	<section>
	  	  	  <div className="filter-container">
	  	  	  	<Filter />
	  	  	  </div>
	  	      {allCampaigns}
	  	    </section>
	  	  </Grid>
	  	</Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
  	campaigns: state.campaigns
  }
}

export default connect(mapStateToProps, { loadCampaigns })(Browse)