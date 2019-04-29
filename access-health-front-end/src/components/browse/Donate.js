import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'

class Donate extends Component {

  state = {
  	donationAmount: null,
  	complete: false
  }

  handleChange = (e) => {
  	this.setState({
  	  donationAmount: e.target.value
  	})
  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	const amount = this.state.donationAmount * 100

  }

  render(){
  	console.log(this.props)
	return (
		<React.Fragment>
		  <div>
			<TextField
			  id="filled-adornment-amount"
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
			
		  </div>
		  <Button variant="outlined" color="primary" onClick={this.handleSubmit}>Submit</Button>
		</React.Fragment>
	  )

	}
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Donate)