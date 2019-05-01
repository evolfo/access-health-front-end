const initialState = {
  loading: false
}

export default function loadReducer(state = initialState, action) {
  switch (action.type) {

    case 'LOAD_START':
 	  return {...state, loading: true }

 	case 'LOAD_END': 
 	  return {...state, loading: false }

    default:
      return state;
  }
}