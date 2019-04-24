import React from 'react'
import Filler from './Filler'
import Typography from '@material-ui/core/Typography';

const ProgressBar = props => {

  return (
  	<div className="progress-bar">
  	  <Filler percentComplete={props.percentComplete} />
  	  <Typography variant="h6">
  	    {props.percentComplete}% done
  	  </Typography>
  	</div>
  )
}

export default ProgressBar