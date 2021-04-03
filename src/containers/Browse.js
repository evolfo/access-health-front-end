import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';
import { loadCampaigns, loadSomeCampaigns } from '../actions/campaignActions'
import { Link } from 'react-router-dom';

import Filter from '../components/browse/Filter' 
import BrowseCard from '../components/browse/BrowseCard'

class Browse extends Component {

  state = {
    offset: 0
  }

  componentDidMount() {
    this.props.loadSomeCampaigns(this.state.offset)
      .then(hi => {
        this.setState({
          pageCount: Math.ceil(this.props.campaigns.campaigns.length / 10)
        })
      })
  }

  handlePageClick = data => {

    let selected = data.selected;
    let offset = Math.ceil(selected * 10);

    this.setState({ offset: offset }, () => {
      this.props.loadSomeCampaigns(this.state.offset);
    });
  };

  render() {
  	let allCampaigns;
      // showing the campaigns that are closest to being funded
  	if (this.props.campaigns.browseCampaigns[0] && this.props.state.sort.term === 'lowest-cost-to-complete') {
      let filteredCampaigns = this.props.campaigns.browseCampaigns.sort(function(a, b) {
        return a.amount_left_to_fund - b.amount_left_to_fund
      })

  	  allCampaigns = filteredCampaigns.map(campaign => {
        let urlEnding = campaign.title.split(' ').join('-').toLowerCase()

  	  	return (
  	  	  <Link to={`/browse/${urlEnding}`} key={campaign.id}>
  	  	    <BrowseCard fromBrowse={campaign} campaign={campaign} />
  	  	  </Link>
  	  	)
  	  })
      // showing the campaigns that end sooner first
  	} else if (this.props.campaigns.browseCampaigns[0] && this.props.state.sort.term === 'newest') {
      let filteredCampaigns = this.props.campaigns.browseCampaigns.sort(function(a, b) {

        let newA = a.ends.split(' ').slice(0, 3).join(' ').replace(/,/g, '')
        let newB = b.ends.split(' ').slice(0, 3).join(' ').replace(/,/g, '')

        a = newA.split(' ')[0]     
        b = newB.split(' ')[0]

        let arr1 = newA.split(' ')
        arr1.shift()

        let arr2 = newB.split(' ')
        arr2.shift()

        arr1.splice(1, 0, a)
        arr2.splice(1, 0, b)

        arr1[0] = arr1[0].replace(/[A-Za-z]+$/, '')
        arr2[0] = arr2[0].replace(/[A-Za-z]+$/, '')

        let dateA = new Date(arr1)
        let dateB = new Date(arr2)
        return dateA - dateB
      }).reverse()

      allCampaigns = filteredCampaigns.map(campaign => {
        let urlEnding = campaign.title.split(' ').join('-').toLowerCase()

        return (
          <Link to={`/browse/${urlEnding}`} key={campaign.id}>
            <BrowseCard fromBrowse={campaign} campaign={campaign} />
          </Link>
        )
      })
      // showing the campaigns that are closest to being done
    } else if (this.props.campaigns.browseCampaigns[0] && this.props.state.sort.term === 'fewest-days') {
      let filteredCampaigns = this.props.campaigns.browseCampaigns.sort(function(a, b) {
        let newA = a.ends.split(' ').slice(0, 3).join(' ').replace(/,/g, '')
        let newB = b.ends.split(' ').slice(0, 3).join(' ').replace(/,/g, '')

        a = newA.split(' ')[0]     
        b = newB.split(' ')[0]

        let arr1 = newA.split(' ')
        arr1.shift()

        let arr2 = newB.split(' ')
        arr2.shift()

        arr1.splice(1, 0, a)
        arr2.splice(1, 0, b)

        arr1[0] = arr1[0].replace(/[A-Za-z]+$/, '')
        arr2[0] = arr2[0].replace(/[A-Za-z]+$/, '')

        let dateA = new Date(arr1)
        let dateB = new Date(arr2)

        return dateA - dateB
      })

      allCampaigns = filteredCampaigns.map(campaign => {
        let urlEnding = campaign.title.split(' ').join('-').toLowerCase()

        return (
          <Link to={`/browse/${urlEnding}`} key={campaign.id}>
            <BrowseCard fromBrowse={campaign} campaign={campaign} />
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
              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
  	  	    </section>
  	  	  </Grid>
  	  	</Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    state,
  	campaigns: state.campaigns
  }
}

export default connect(mapStateToProps, { loadCampaigns, loadSomeCampaigns })(Browse)