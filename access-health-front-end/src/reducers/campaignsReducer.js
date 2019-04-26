const initialState = {
  campaigns: []
}

export default function campaignsReducer(state = initialState, action) {
  switch (action.type) {

    case 'GET_CAMPAIGNS':
 	  return {...state, campaigns: action.payload}

 	case 'CREATE_CAMPAIGN': 
 	  console.log('hi')
 	  return {...state, campaigns: [...state.campaigns, action.payload] }

    default:
      return state;
  }
}