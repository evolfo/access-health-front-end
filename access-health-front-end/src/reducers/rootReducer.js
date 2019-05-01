import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import donationsReducer from './donationsReducer'
import campaignsReducer from './campaignsReducer'
import modalReducer from './modalReducer'
import loadReducer from './loadReducer'
import sortReducer from './sortReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  campaigns: campaignsReducer,
  donations: donationsReducer,
  modal: modalReducer,
  loader: loadReducer,
  sort: sortReducer
})

export default rootReducer