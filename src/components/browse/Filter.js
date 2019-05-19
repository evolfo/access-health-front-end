import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { sortTerm } from '../../actions/sortActions'

class Filter extends Component {

  handleFilterChange = (e) => {
    this.props.sortTerm(e.target.value)
  }

  render(){
  	return (
  	  <form className="" autoComplete="off">
        <FormControl className="">
          <InputLabel htmlFor="age-simple">Sort By</InputLabel>
          <Select
            value={this.props.sort.term}
            onChange={this.handleFilterChange}
          >
            <MenuItem value="lowest-cost-to-complete">
              <em>Lowest Cost to Complete</em>
            </MenuItem>
            <MenuItem value="fewest-days">Fewest Days Left</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
          </Select>
        </FormControl>
      </form>
  	)
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { sortTerm })(Filter)