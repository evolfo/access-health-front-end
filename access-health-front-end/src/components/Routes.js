import React from 'react'
import Home from '../containers/Home'
import Browse from '../containers/Browse'
import Profile from '../containers/Profile'
import CreateCampaignContainer from '../containers/CreateCampaignContainer'
import { Route, Switch } from 'react-router-dom'

const Routes = props => {

  console.log(props.users)

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/browse' component={Browse} />
      <Route path='/createcampaign' component={CreateCampaignContainer} />
      <Route path='/profile/:username' component={Profile} />
    </Switch>
  )
}

export default Routes