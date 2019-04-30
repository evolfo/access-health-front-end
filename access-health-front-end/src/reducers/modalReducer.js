const initialState = {
  loginOpen: false,
  signupOpen: false,
  donationOpen: false
}

export default function modalReducer(state = initialState, action) {
  switch (action.type) {

    case 'LOGIN_MODAL_OPEN':
 	  return {...state, loginOpen: true }

 	case 'LOGIN_MODAL_CLOSE': 
 	  return {...state, loginOpen: false }

 	case 'SIGNUP_MODAL_OPEN':
 	  return {...state, signupOpen: true }

 	case 'SIGNUP_MODAL_CLOSE':
 	  return {...state, signupOpen: false }

 	case 'DONATION_MODAL_OPEN':
 	  return {...state, donationOpen: true }

 	case 'DONATION_MODAL_CLOSE':
 	  return {...state, donationOpen: false }

    default:
      return state;
  }
}