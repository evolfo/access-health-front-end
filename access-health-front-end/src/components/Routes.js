import React from 'react'
import Home from '../containers/Home'
import Browse from '../containers/Browse'
import Profile from '../containers/Profile'
// import CampaignPage from '../components/browse/CampaignPage'
import CreateCampaignContainer from '../containers/CreateCampaignContainer'
import CampaignPage from './browse/CampaignPage'
import { Route, Switch } from 'react-router-dom'

const Routes = props => {

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/browse' component={Browse} />
      <Route path='/browse/:campaignTitle' component={CampaignPage} />
      
      <Route path='/createcampaign' component={CreateCampaignContainer} />
      <Route path='/profile/:username' render={() => (
      	<Profile currentUser={props.currentUser} />
  	  )}/>
    </Switch>
  )
}

export default Routes