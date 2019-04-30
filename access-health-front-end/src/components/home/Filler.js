import React from 'react'

const Filler = props => {

  const style = {
  	width: `${props.percentComplete}%`
  }

  return (
  	<div className="filler" style={style}>
  	</div>
  )
}

export default Filler