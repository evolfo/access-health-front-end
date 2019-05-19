import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { connect } from 'react-redux';
import { getAuth, getStripeAct, gettingStripeBalance, gettingStripeBalanceHistory } from '../actions/userActions';
import { withRouter } from "react-router-dom";

import store from '../index'

class LoginModal extends Component {

	state = {
	 	email: '',
	 	password: ''
	}

	handleChange = (e) => {
		this.setState({
		  [e.target.type]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleClose()
		this.props.getAuth(this.state)
		  .then(resp => {
		  	if (localStorage.token != "undefined" && store.getState().users.user.stripe_uid) {
			  	this.props.getStripeAct(store.getState().users.user.stripe_uid)
			  	this.props.gettingStripeBalance(store.getState().users.user.stripe_uid)
			  	this.props.gettingStripeBalanceHistory(store.getState().users.user.stripe_uid)
			}
		  })
		setTimeout(() => {
			if(localStorage.token && localStorage.token != "undefined") {
			  this.props.history.push('/')
			  window.alert('You are signed in!')
			} else {
			  window.alert('Please try again')
			}
		}, 200)
	}

	render() {
		return (
		<Dialog
		  open={this.props.open}
		  onClose={this.props.handleClose}
		  aria-labelledby="form-dialog-title"
		>
		  <DialogTitle id="form-dialog-title">Login</DialogTitle>
		    <form>
			  <DialogContent>
			    <TextField
			      required
			      autoFocus
			      margin="dense"
			      label="Email Address"
			      type="email"
			      fullWidth
			      value={this.state.email}
			      onChange={this.handleChange}
			    />
			    <TextField
			      required
			      autoFocus
			      margin="dense"
			      label="Password"
			      type="password"
			      fullWidth
			      value={this.state.password}
			      onChange={this.handleChange}
			    />
			  </DialogContent>
			</form>
		  <DialogActions>
		    <Button onClick={this.props.handleClose} color="primary">
		      Cancel
		    </Button>
		    <Button onClick={this.handleSubmit} color="primary">
		      Submit
		    </Button>
		  </DialogActions>
		</Dialog>
		)
	}
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { getAuth, getStripeAct, gettingStripeBalance, gettingStripeBalanceHistory })(withRouter(LoginModal))