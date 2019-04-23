import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import donationsReducer from './donationsReducer'
import campaignsReducer from './campaignsReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  campaigns: campaignsReducer,
  donations: donationsReducer
})

export default rootReducer