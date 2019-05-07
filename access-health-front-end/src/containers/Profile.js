import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Moment from 'react-moment';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

import Person from '@material-ui/icons/PersonOutline';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Call';
import Money from '@material-ui/icons/AttachMoney';

import BrowseCard from '../components/browse/BrowseCard'
import { getStripeAct, gettingStripeBalance, gettingStripeBalanceHistory } from '../actions/userActions'


class Profile extends Component { 

  state = {
    campaigns: []
  }

  componentDidMount() {
    let campaigns = this.props.campaigns.campaigns.filter(campaign => {
      return campaign.user_id === this.props.users.user.id
    })
    
    this.props.getStripeAct(this.props.users.user.stripe_uid)
    this.props.gettingStripeBalance(this.props.users.user.stripe_uid)

    this.setState({
      campaigns
    })
  }

  generateDonations = () => {
  	return this.props.users.user.donations.map(donation => {

      const styles = {
        secondListItem: {
          textAlign: 'right'
        }
      }

      let urlEnding = donation.campaign_title.split(' ').join('-').toLowerCase()

  	  return (
  	  	<List className="alternate-background">
          <Link key={donation.id} to={`/browse/${urlEnding}`}>
            <ListItem>
              <ListItemText
                primary={`Campaign: ${donation.campaign_title}`}
                secondary={`by ${donation.campaign_owner}`}
              />
              <ListItemText
                style={styles.secondListItem}
                primary={`Amount: $${donation.amount}`}
                secondary={<Moment format="D MMM YYYY HH:MM" withTitle>{donation.created_at}</Moment>}
              />

              <div></div>
            </ListItem>
          </Link>
      	</List>
      )
  	})
  }

  generateCampaigns = () => {
    return this.state.campaigns.map(campaign => {

      let urlEnding = campaign.title.split(' ').join('-').toLowerCase()

      return (
        <Link key={campaign.id} to={`/browse/${urlEnding}`}>
          <BrowseCard campaign={campaign}/>
        </Link>
      )
    })
  }

  render(){

    const styles = {
      profileText: {
        display: 'inline-block',
        padding: '1rem',
        marginTop: '-17px',
        verticalAlign: 'middle'
      },
      flex: {
        display: 'flex'
      }
    }
    console.log(this.props.users)
    
    const stripeURL = `https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_ExRBTLkL6gQHmtUOhaXPDDdj8pGDqoIi&scope=read_write&redirect_uri=https://access-health-api.herokuapp.com/api/v1/oauth/callback&state=${this.props.users.user.id}`
    
    if (this.props.users.user.stripe_uid && !this.props.users.stripeAct.error) {
    	return(
    		<div className="container">

  	  	  <section id="profile">
  	        <Grid container justify="center" spacing={24} >
  		  	    <Grid id="no-padding" item xs={10}>
    		  	    <Grid className="profile-cards" item xs={8}>
                  <Typography variant="h4" gutterBottom>Hello, {this.props.users.user.first_name}</Typography>
                  <ExpansionPanel defaultExpanded="true">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className="">Stripe Payment Profile</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                      <div className="accordian-content">
                        <Paper className="accordian-table">
                          <Table className="">
                            <TableHead>
                              <TableRow>
                                <TableCell><Typography style={styles.flex} variant="h5"><Person />Connected Account</Typography></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell><Email /><div style={styles.profileText}>{this.props.users.stripeAct.email}</div></TableCell>
                                <TableCell><Phone /><div style={styles.profileText}>{this.props.users.stripeAct.business_profile.support_phone}</div></TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Paper>
                        <Paper className="accordian-table">
                          <Table className="">
                            <TableHead>
                              <TableRow>
                                <TableCell><Typography style={styles.flex} variant="h5"><Money />Balance</Typography></TableCell>
                                <TableCell></TableCell>
                               
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                {this.props.users.stripeBalance.available ? 
                                  this.props.users.stripeBalance.available.map(balance => {
                                  let price = parseFloat(balance.amount)/100
                                  let fixedPrice = price.toFixed(2)
                                  return <TableCell >Available Funds: ${fixedPrice}</TableCell>
                                }) : null}

                                {this.props.users.stripeBalance.available ? 
                                  this.props.users.stripeBalance.pending.map(balance => {
                                  let price = parseFloat(balance.amount)/100
                                  let fixedPrice = price.toFixed(2)
                                  return <TableCell >Pending Funds: ${fixedPrice}</TableCell>
                                }) : null}
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Paper>
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className="">Your Donations</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <div className="accordian-content">
                        {this.generateDonations()}
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className="">Your Campaigns</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <div className="accordian-campaign-content">
                        {this.generateCampaigns()}
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                  {/*<a href={stripeURL}>Set up Payments with Stripe</a>*/}
    		  	    </Grid>
  		  	    </Grid>
  		      </Grid>
  		    </section>
  		  </div>
    	)
    } else {
      return (
        <div className="container">
          <section id="profile">
            <Grid container justify="center" spacing={24} >
              <Grid id="no-padding" item xs={10}>
                <Grid className="profile-cards" item xs={8}>
                  <Typography variant="h4" gutterBottom>Hello, {this.props.users.user.first_name}</Typography>
                  <a href={stripeURL}>
                    <Fab variant="extended" aria-label="Delete" className="stripe-button">
                      Set up Payments with Stripe
                    </Fab>
                  </a>
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="">Your Donations</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div className="accordian-content">
                          {this.generateDonations()}
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="">Your Campaigns</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div className="accordian-campaign-content">
                          {this.generateCampaigns()}
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Grid>
                </Grid>
              </Grid>
            </section>
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { getStripeAct, gettingStripeBalance, gettingStripeBalanceHistory })(Profile)