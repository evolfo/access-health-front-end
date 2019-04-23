import {
  FETCH_CAMPAIGNS_BEGIN,
  FETCH_CAMPAIGNS_SUCCESS,
  FETCH_CAMPAIGNS_FAILURE
} from '../actions/campaignActions';

const initialState = {
  campaigns: [],
  loading: false,
  error: null
}

export default function campaignsReducer(state = initialState, action) {
  switch (action.type) {

    case 'FETCH_CAMPAIGNS_BEGIN':
 	  return {
 	  	...state,
 	  	loading: true,
 	  	error: null
 	  }

 	case 'FETCH_CAMPAIGNS_SUCCESS':
 	  return {
 	  	...state,
 	  	loading: false,
 	  	campaigns: action.payload.campaigns
 	  }

 	case 'FETCH_CAMPAIGNS_FAILURE':
 	  return {
 	  	...state,
 	  	loading: false,
 	  	error: action.payload.error,
 	  	campaigns: []
 	  }	

    default:
      return state;
  }
}