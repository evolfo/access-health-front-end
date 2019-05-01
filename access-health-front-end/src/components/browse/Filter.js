import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Filter extends Component {

  state = {
  	filterTerm: 'All'
  }

  handleFilterChange = (e) => {
  	this.setState({
  	  filterTerm: e.target.value
  	})
  }

  render(){
  	return (
  	  <form className="" autoComplete="off">
        <FormControl className="">
          <InputLabel htmlFor="age-simple">Filter</InputLabel>
          <Select
            value={this.state.filterTerm}
            onChange={this.handleFilterChange}
          >
            <MenuItem value="All">
              <em>All Campaigns</em>
            </MenuItem>
            <MenuItem value="fewest-days">Fewest Days Left</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value='lowest-cost-to-complete'>Lowest Cost to Complete</MenuItem>
          </Select>
        </FormControl>
      </form>
  	)
  }
}

export default Filter