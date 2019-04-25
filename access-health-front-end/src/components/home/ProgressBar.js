import React from 'react'
import { connect } from 'react' 
import Filler from './Filler'
import Typography from '@material-ui/core/Typography';

const ProgressBar = props => {

  return (
  	<div className="progress-bar">
  	  <Filler percentComplete={props.percentComplete} />
  	  <Typography variant="h6">
  	    {props.percentComplete}% done
  	  </Typography>
  	  <span>{props.amount ? `$${props.amount}/$${props.goal} goal` : null} </span>
  	</div>
  )
}

export default ProgressBar