const initialState = {
  donations: []
}

export default function donationsReducer(state = initialState, action) {
  
  switch (action.type) {
  	case 'GET_DONATIONS':
  	  return {...state, donations: action.payload }

    case 'CREATE_DONATION':
      return {...state, donations: [...state.donations, action.payload] }
 
    default:
      return state;
  }
}