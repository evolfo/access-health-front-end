const initialState = {
  loginOpen: false,
  signupOpen: false
}

export default function navbarReducer(state = initialState, action) {
  switch (action.type) {

    case 'LOGIN_MODAL_OPEN':
 	  return {...state, loginOpen: true }

 	case 'LOGIN_MODAL_CLOSE': 
 	  return {...state, loginOpen: false }

 	case 'SIGNUP_MODAL_OPEN':
 	  return {...state, signupOpen: true }

 	case 'SIGNUP_MODAL_CLOSE':
 	  return {...state, signupOpen: false }

    default:
      return state;
  }
}