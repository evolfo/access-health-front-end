import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton';

import { logOut } from '../actions/userActions'

class Navbar extends Component {

  state = {
    loginOpen: false,
    signupOpen: false,
  };

  handleLoginClickOpen = () => {
    this.setState({ loginOpen: true });
  };

  handleLoginClose = () => {
    this.setState({ loginOpen: false });
  };

  handleSignupClickOpen = () => {
    this.setState({ signupOpen: true });
  };

  handleSignupClose = () => {
    this.setState({ signupOpen: false });
  };

  handleLogOut = () => {
    this.props.history.push('/')
    this.props.logOut();

  }
 
  render() {
    let username = ''
    
    if (localStorage.token !== "undefined") { 
      username = this.props.users.user.first_name
    }  
    return (
    	<div className="navbar">
        <AppBar position="static">
          <Toolbar>
            <Link to='/'>Home</Link>
            <Link to='/browse'>Browse Campaigns</Link>
            <div className="navbar-search">
              <div className="">
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Find a campaign to support"
              />
            </div>
            <div className="login-signup">
              { !localStorage.token || localStorage.token === "undefined" ? 
              <React.Fragment>
                <Button onClick={this.handleLoginClickOpen} color="inherit">Login</Button>
                <LoginModal open={this.state.loginOpen} handleClickOpen={this.handleLoginClickOpen} handleClose={this.handleLoginClose} />
                <Button onClick={this.handleSignupClickOpen} color="inherit">Sign Up</Button>
                <SignupModal open={this.state.signupOpen} handleClickOpen={this.handleSignupClickOpen} handleClose={this.handleSignupClose} /> 
              </React.Fragment>
              :
              <React.Fragment>
                <Button onClick={this.handleLogOut} color="inherit">Logout</Button>
                <Link to={`/profile/${username}`}>
                  <IconButton color="inherit">
                    <AccountCircle />
                  </IconButton>
                </Link>
              </React.Fragment>
              }
            </div>
          </Toolbar>
        </AppBar>
      </div>	
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default withRouter(connect(mapStateToProps, { logOut })(Navbar))
