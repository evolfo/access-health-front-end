const initialState = {
  campaigns: [],
  browseCampaigns: []
}

export default function campaignsReducer(state = initialState, action) {
  switch (action.type) {

    case 'GET_CAMPAIGNS':
   	  return {...state, campaigns: action.payload}

    case 'GET_SOME_CAMPAIGNS':
      return {...state, browseCampaigns: action.payload}

   	case 'CREATE_CAMPAIGN': 
   	  return {...state, campaigns: [...state.campaigns, action.payload] }

   	case 'EDIT_CAMPAIGN':
   	  const index = state.campaigns.indexOf(
   	  	state.campaigns.find(campaign => campaign.id === action.payload.id))

   	  return {...state,
   	  	     campaigns: [...state.campaigns.slice(0, index),
    			 {...action.payload},
    			 ...state.campaigns.slice(index + 1)]} 

  	case 'DELETE_CAMPAIGN':
  	  return {...state, campaigns: state.campaigns.filter(campaign => campaign.id !== action.payload)}

    default:
      return state;
  }
}