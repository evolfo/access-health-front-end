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

import Search from '../containers/Search'
import { logOut } from '../actions/userActions'
import { loginModalOpen, loginModalClose, signupModalOpen, signupModalClose } from '../actions/modalActions'

class Navbar extends Component {

  handleLogOut = () => {
    this.props.history.push('/')
    this.props.logOut();
  }
 
  render() {
    
    let username = ''
    
    if (localStorage.token && localStorage.token !== "undefined") { 
      username = this.props.users.user.first_name
    }  
    return (
    	<div className="navbar">
        <AppBar position="static">
          <Toolbar>
            <Link to='/'>Home</Link>
            <Link to='/browse'>Browse Campaigns</Link>
              <Search />
            <div className="login-signup">
              { !localStorage.token || localStorage.token === "undefined" ? 
              <React.Fragment>
                <Button onClick={this.props.loginModalOpen} color="inherit">Login</Button>
                <LoginModal open={this.props.modal.loginOpen} handleClickOpen={this.props.loginModalOpen} handleClose={this.props.loginModalClose} />
                <Button onClick={this.props.signupModalOpen} color="inherit">Sign Up</Button>
                <SignupModal open={this.props.modal.signupOpen} handleClickOpen={this.props.signupModalOpen} handleClose={this.props.signupModalClose} /> 
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

export default withRouter(connect(mapStateToProps, { logOut, loginModalOpen, loginModalClose, signupModalOpen, signupModalClose })(Navbar))
