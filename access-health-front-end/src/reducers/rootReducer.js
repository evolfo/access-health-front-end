import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import donationsReducer from './donationsReducer'
import campaignsReducer from './campaignsReducer'
import navbarReducer from './navbarReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  campaigns: campaignsReducer,
  donations: donationsReducer,
  navbar: navbarReducer
})

export default rootReducer