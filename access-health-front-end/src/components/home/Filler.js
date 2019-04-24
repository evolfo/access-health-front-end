import React from 'react'

const Filler = props => {
  return (
  	<div className="filler" style={{ width: `${props.percentComplete}%` }}>
  	</div>
  )
}

export default Filler