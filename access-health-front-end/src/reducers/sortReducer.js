const initialState = {
  term: 'lowest-cost-to-complete'
}

export default function loadReducer(state = initialState, action) {
  switch (action.type) {

    case 'SORT_TERM':
 	  return {...state, term: action.payload }

    default:
      return state;
  }
}