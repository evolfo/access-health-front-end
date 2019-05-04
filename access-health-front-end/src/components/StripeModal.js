import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';

import { connect } from 'react-redux';
import { stripeModalOpen, stripeModalClose } from '../actions/modalActions';
import { withRouter } from "react-router-dom";

const StripeModal = props => {

	const stripeURL = `https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_ExRBTLkL6gQHmtUOhaXPDDdj8pGDqoIi&scope=read_write&redirect_uri=http://localhost:3000/api/v1/oauth/callback&state=${props.users.user.id}`

	const handleClick = () => {
	  window.location.href = stripeURL
	}

	return (
		<Dialog
		  open={props.modal.stripeOpen}
		  onClose={props.stripeModalClose}
		  aria-labelledby="form-dialog-title"
		>
		  <DialogTitle onClick={props.stripeModalOpen} id="form-dialog-title">Please sign up for Stripe before creating a campaign.</DialogTitle>
		  <a class="stripe-modal-button" target="_blank" onClick={handleClick}>
            <Fab variant="extended" aria-label="Delete" className="stripe-button">
              Set up Payments with Stripe
            </Fab>
          </a>
		</Dialog>
	)
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { stripeModalOpen, stripeModalClose })(withRouter(StripeModal))