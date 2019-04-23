import React, { Component } from 'react'
import Home from '../containers/Home'
import Browse from '../containers/Browse'
import CreateCampaignContainer from '../containers/CreateCampaignContainer'
import { Route, Switch } from 'react-router-dom'

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/browse' component={Browse} />
      <Route path='/createcampaign' component={CreateCampaignContainer} />
      {/*<Route path='/:id' component={Show} />*/}
    </Switch>
  )
}

export default Routes