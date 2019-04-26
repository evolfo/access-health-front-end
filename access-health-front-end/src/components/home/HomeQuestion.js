import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import { loginModalOpen, loginModalClose, signupModalOpen, signupModalClose } from '../../actions/navbarActions'

const HomeQuestion = props => {
  return (
  	<React.Fragment>
  	  <Grid container justify="center" spacing={24}>
	  	<Grid id="no-padding"  item xs={12}>
	  	  <div className="home-create-campaign">
	  	  	<Typography variant="h6">
	  	  	  Are you in debt because of medical bills?
	  	  	</Typography>

	  	    {/* Lines 22-34 will let the user go to the create campaign form
	  	        if they are logged in, and will prompt a login if they are not */}

	  	  	{!localStorage.token || localStorage.token === "undefined" ? 
	  	  		<Link onClick={props.loginModalOpen} to="#">
		 	 	  <Button variant="outlined" className="">
		    		Create a Campaign
		  		  </Button>
		  		</Link>
	  	  	  :
		  	  	<Link to='/create-campaign'>
		 	 	  <Button variant="outlined" className="">
		    		Create a Campaign
		  		  </Button>
		  		</Link>
		  	}
	  	  </div>
	  	</Grid>
	  </Grid>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { loginModalOpen, loginModalClose, signupModalOpen, signupModalClose })(HomeQuestion)