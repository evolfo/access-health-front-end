import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

function getDonateStepContent(step) {
  switch (step) {
    case 0:
      return `Signing up and creating up a payment profile through Stripe enables you to donate to
      		  any active campaigns on Access Health.`;
    case 1:
      return `Search or browse through the list of all active campaigns and find 
      		  one that you'd like to support!`;
    case 2:
      return `Make a donation`;
    default:
      return 'Unknown step';
  }
}

function getCampaignStepContent(step) {
  switch (step) {
    case 0:
      return `Signing up and creating up a profile through Stripe enables you to receive donations
      		  from other Access Health users.`;
    case 1:
      return `If you find yourself struggling with medical debt, create a campaign to start receiving
              support from people all around the world! You'll be able to add a title, description, 
              your goal amount, and upload an image. Campaigns last for 30 days from their creation.`;
    case 2:
      return `Share the campaign with your network. Even if the campaign ends and you don't reach your initial goal
      		  you will still receive all donations made.`;
    default:
      return 'Unknown step';
  }
}

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} className="how-it-works-inner">
      {children}
    </Typography>
  );
}

class HowItWorks extends Component {
  state = {
  	activeStep: 0,
  	value: 0
  }

  getDonateSteps = () => {
    return [
      <span>Create an account and authenticate payments with {this.props.users.user && this.props.users.user.stripe_uid ? <Link to={`/profile/${this.props.users.user.first_name}`}>Stripe</Link> : 'Stripe'}</span>, 
      <span><Link to="/browse">Browse</Link> the Campaigns</span>, 
      'Donate!'
    ];
  }

  getCampaignSteps = () => {
    return [
      <span>Create an account and authenticate payments with {this.props.users.user && this.props.users.user.stripe_uid ? <Link to={`/profile/${this.props.users.user.first_name}`}>Stripe</Link> : 'Stripe'}</span>, 
      'Create a campaign', 
      'Share!'
    ];
  }

  // Handlers for Stepper

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  // Handlers for Tabs

  handleChange = (event, value) => {
    this.setState({ value });
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
  }

  render() {
    const { classes, theme } = this.props;
    const donateSteps = this.getDonateSteps();
    const campaignSteps = this.getCampaignSteps();
    const { activeStep } = this.state;

    return (
      <Grid spacing={0} direction="column" alignItems="center" className="how-it-works-container" container spacing={24}>
  	  	<Grid item xs={8}>
	      <div className="how-it-works">
	        <Typography variant="h4" gutterBottom>How It Works</Typography>
	      	<div className="">
		      <AppBar position="static" color="default">
		        <Tabs
		          value={this.state.value}
		          onChange={this.handleChange}
		          indicatorColor="primary"
		          textColor="primary"
		          variant="fullWidth"
		        >
		          <Tab className="tab-text" label="For Donation Makers" />
		          <Tab className="tab-text" label="For Campaign Creators" />
		        </Tabs>
		      </AppBar>
		      <SwipeableViews
		          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
		          index={this.state.value}
		          onChangeIndex={this.handleChangeIndex}
		        >
		        <TabContainer dir={theme.direction}>
		            <Stepper activeStep={activeStep} orientation="vertical">
			          {donateSteps.map((label, index) => (
			            <Step key={label}>
			              <StepLabel><Typography variant="h5">{label}</Typography></StepLabel>
			              <StepContent>
			                <Link onPress={(url) => alert(url)} linkStyle={{fontSize:16, color:'blue'}}>
			                  <Typography variant="h6">{getDonateStepContent(index)}</Typography>
			                </Link>
			                <div className="">
			                  <div>
			                    <Button
			                      disabled={activeStep === 0}
			                      onClick={this.handleBack}
			                      className=""
			                    >
			                      Back
			                    </Button>
			                    {activeStep === donateSteps.length -1 ?
			                      null :
			                      <Button
				                    variant="contained"
				                    color="primary"
				                    onClick={this.handleNext}
				                    className=""
			                      >
			                        Next
			                      </Button>
			                    }
			                  </div>
			                </div>
			              </StepContent>
			            </Step>
			          ))}
			        </Stepper>
		        </TabContainer>
		        <TabContainer dir={theme.direction}>
		            <Stepper activeStep={activeStep} orientation="vertical">
			          {campaignSteps.map((label, index) => (
			            <Step key={label}>
			              <StepLabel><Typography variant="h5">{label}</Typography></StepLabel>
			              <StepContent>
			                <Typography variant="h6">{getCampaignStepContent(index)}</Typography>
			                <div className="">
			                  <div>
			                    <Button
			                      disabled={activeStep === 0}
			                      onClick={this.handleBack}
			                      className=""
			                    >
			                      Back
			                    </Button>
			                    {activeStep === donateSteps.length -1 ?
			                      null :
			                      <Button
				                    variant="contained"
				                    color="primary"
				                    onClick={this.handleNext}
				                    className=""
			                      >
			                        Next
			                      </Button>
			                    }
			                  </div>
			                </div>
			              </StepContent>
			            </Step>
			          ))}
			        </Stepper>
		        </TabContainer>
		      </SwipeableViews>
		    </div>
	        {/*
	        */}
	      </div>
	    </Grid>
	  </Grid>
    );
  }
}

HowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(HowItWorks))