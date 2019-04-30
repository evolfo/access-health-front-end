import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import DonateModal from './DonateModal'

import { donationModalOpen, donationModalClose } from '../../actions/modalActions'
import { createADonation, getAllDonations } from '../../actions/donationActions'

import { injectStripe } from 'react-stripe-elements';

import { connect } from 'react-redux'

class Donate extends Component {

  constructor(props) {
  	super(props)
  	this.state = {
  	  donationAmount: 0,
  	  complete: false,
  	  message: ''
  	}
  	this.handleClick = this.handleClick.bind(this)
  }


  handleChange = (e) => {
  	this.setState({
  	  [e.target.id]: e.target.value,
  	})
  }

  async handleClick(e) {
  	e.preventDefault()
  	const amount = this.state.donationAmount * 100

  	const donationObj = {
  		amount: this.state.donationAmount,
  		user_id: this.props.users.user.id,
  		campaign_id: this.props.campaign.id,
  		message: this.state.message
  	}

  	const {token} = await this.props.stripe.createToken({name: this.props.users.user.first_name});

  	let response = await fetch('http://localhost:3000/api/v1/charge', {
  	  method: 'POST',
  	  headers: {
  	  	'Content-Type': 'application/json',
  	  	Authorization: `Bearer: ${localStorage.getItem('token')}`
  	  },
  	  body: JSON.stringify({
  	  	amount: amount,
  	  	stripeToken: token.id,
  	  	ownerId: this.props.campaign.user_id,
  	  	campaignId: this.props.campaign.id,
  	  	message: this.state.message
  	  })
  	})
  	  .then(chargeObj => {
  	  	this.props.createADonation(donationObj)
  	}).then(hello => {
  		this.props.getAllDonations()
  	})
  }

  render(){
	return (
		<React.Fragment>
		  <form>
			<TextField
			  id="donationAmount"
			  className=""
			  variant="filled"
			  type="number"
			  label="Donation Amount"
			  value={this.state.donationAmount}
			  onChange={this.handleChange}
			  InputProps={{
			    startAdornment: <InputAdornment position="start">$</InputAdornment>,
			  }}
			/>
			<DonateModal handleChange={this.handleChange} handleClick={this.handleClick} amount={this.state.donationAmount} open={this.props.modal.donationOpen} handleClickOpen={this.props.donationModalOpen} handleClose={this.props.donationModalClose} />
		  </form>
		  <Button onClick={this.props.donationModalOpen} variant="outlined" color="primary">Submit</Button>
		</React.Fragment>
	  )

	}
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { donationModalOpen, donationModalClose, createADonation, getAllDonations })(injectStripe(Donate))