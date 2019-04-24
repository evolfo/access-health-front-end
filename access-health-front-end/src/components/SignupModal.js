import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { newUser } from '../actions/userActions'
import { withRouter } from "react-router-dom";

class SignupModal extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleClose()
    this.props.newUser(this.state)
    setTimeout(() => {
      if(localStorage.token) {
        this.props.history.push('/')
        window.alert('Thanks for signing up!')
      } else {
        window.alert('Please try again')
      }
    }, 500)
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign up</DialogTitle>
        <DialogContent>
          <form onSubmit={this.handleSubmit}>
            <TextField
              onChange={this.handleChange}
              required
              autoFocus
              id="firstName"
              margin="dense"
              label="First Name"
              type="text"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              required
              autoFocus
              id="lastName"
              margin="dense"
              label="Last Name"
              type="text"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              required
              autoFocus
              id="email"
              margin="dense"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              required
              autoFocus
              id="password"
              margin="dense"
              label="Password"
              type="password"
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Sign up
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { newUser })(withRouter(SignupModal))