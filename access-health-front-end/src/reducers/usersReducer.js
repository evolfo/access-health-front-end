const initialState = {
  user: { donations: []}
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
      console.log("logged out");
      return {
        ...state,
        user: {},
        pendingRequest: false,
        error: null
      }

    case "LOG_IN_ERROR":
      return Object.assign({}, state, { error: action.payload });
 
    default:
      return state;
  }
}

export default usersReducer