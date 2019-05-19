import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import { CardElement, injectStripe } from 'react-stripe-elements';

import { connect } from 'react-redux';

import { donationModalOpen, donationModalClose } from '../../actions/modalActions'
import Loader from '../Loader'

import { withRouter } from "react-router-dom";

class DonateModal extends Component {

	render() {

		const styles = {
	  	  para: {
	  	    textAlign: 'center',
    	    color: '#f70000'
	      },
	      card: {
	      	marginTop: '1.5rem'
	      }
	    }

		return (
		<Dialog
		  open={this.props.open}
		  onClose={this.props.handleClose}
		  aria-labelledby="form-dialog-title"
		  id="donation-modal"
		>
		  <DialogTitle id="form-dialog-title">Donate</DialogTitle>
		  {this.props.amount < 5 ? <Typography style={styles.para} variant="body1">Your donation must be more than $5.</Typography> : null }
		    <form>
			  <DialogContent>
			    <TextField
			      required
			      id="donationAmount"
			      autoFocus
			      margin="dense"
			      label="Amount"
			      type="number"
			      fullWidth
			      value={this.props.amount}
			      onChange={this.props.handleChange}
			    />
			    <TextField
			      required
			      id="message"
			      autoFocus
			      margin="dense"
			      label="Message to the Campaign Owner"
			      type="text"
			      fullWidth
			      value={this.props.message}
			      onChange={this.props.handleChange}
			    />
			  <div style={styles.card}>
			  	<CardElement />
			  </div>
			  </DialogContent>
			</form>
			{this.props.loading ? <Loader /> : null}
		  <DialogActions>
		    <Button onClick={this.props.handleClose} color="primary">
		      Cancel
		    </Button>
		    <Button onClick={this.props.handleClick} color="primary">
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

export default connect(mapStateToProps, { donationModalOpen, donationModalClose })(withRouter(DonateModal))