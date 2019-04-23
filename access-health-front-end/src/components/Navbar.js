import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const Navbar = props => {
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
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  	
  )
}

export default Navbar

{/*<nav>
	  <ul>
	    <li><Link to='/'>Home</Link></li>
	    <li><Link to='/browse'>Browse Campaigns</Link></li>
	    <li><Link to='/createcampaign'>Create Campaign</Link></li>
	    <li><Link>Login</Link></li>
	    <li><Link>Signup</Link></li>
	  </ul>
	</nav>*/}