const initialState = {
  user: { donations: [] },
  stripeAct: null,
  stripeBalance: [],
  stripeBalanceHistory: []
}

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "LOG_IN_PENDING":
      return {
      	...state,
      	user: { donations: []},
      	pendingRequest: true
      }

    case "LOG_IN":
      localStorage.setItem("token", action.payload.jwt)
      return {
      	...state,
      	user: action.payload.user,
      	pendingRequest: false,
      	error: null
      }

    case "LOG_OUT":
      localStorage.clear();
      return {
        ...state,
        user: {},
        pendingRequest: false,
        error: null,
        stripeAct: null,
        stripeBalance: [],
        stripeBalanceHistory: []
      }

    case "CREATE_USER":
      localStorage.setItem("token", action.payload.jwt)
      return {
        ...state,
        user: action.payload.user,
        pendingRequest: false,
        error: null
      }

    case "GET_USERS":
      if (state.user) {
        const currentUser = action.payload.find(user => {
          return user.id === state.user.id
        })
        
        return {
          ...state,
          ...action.payload,
          user: currentUser
        }
      } else {

      } return {
        ...state,
        ...action.payload
      }

    case "LOG_IN_ERROR":
      return Object.assign({}, state, { error: action.payload });

    case "GET_STRIPE_ACT":

      return {
        ...state,
        stripeAct: action.payload
      }

    case "GET_STRIPE_BALANCE":
      return {
        ...state,
        stripeBalance: action.payload
      }

    case "GET_STRIPE_BALANCE_HISTORY":
      return {
        ...state,
        stripeBalanceHistory: action.payload
      }
 
    default:
      return state;
  }
}

export default usersReducer