import React from 'react'
import Filler from './Filler'
import Typography from '@material-ui/core/Typography';

const ProgressBar = props => {
  return (
  	<div className="progress-bar">
  	  <Filler />
  	  <Typography variant="h6">
  	    50% done
  	  </Typography>
  	</div>
  )
}

export default ProgressBar