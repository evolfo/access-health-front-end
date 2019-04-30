import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import donationsReducer from './donationsReducer'
import campaignsReducer from './campaignsReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  campaigns: campaignsReducer,
  donations: donationsReducer,
  modal: modalReducer
})

export default rootReducer