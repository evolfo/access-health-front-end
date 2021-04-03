const baseURL = 'https://access-health-api.herokuapp.com/api/v1/'
// 'http://localhost:3000/api/vi/'

// DISPATCH

const logIn = userObj => {
  return { type: 'LOG_IN', payload: userObj }
}

export const logOut = () => {
  return { type: "LOG_OUT" };
};

export const logInPending = () => {
  return { type: "LOG_IN_PENDING" }
};

export const logInError = error => {
  return { type: "LOG_IN_ERROR", payload: error }
};

const createUser = userObj => {
  return { type: 'CREATE_USER', payload: userObj }
}

const getUsers = usersObj => {
  return { type: 'GET_USERS', payload: usersObj }
}

const getStripeAccount = stripeObj => {
  return { type: 'GET_STRIPE_ACT', payload: stripeObj }
}

const getStripeBalance = stripeObj => {
  return { type: 'GET_STRIPE_BALANCE', payload: stripeObj}
}

const getStripeBalanceHistory = stripeObj => {
  return { type: 'GET_STRIPE_BALANCE_HISTORY', payload: stripeObj}
}

// THUNK


//logging in
export const getAuth = userInfo => {
  return dispatch => {
    dispatch(logInPending());
    return fetch(baseURL + 'login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userJson => {
        if (!userJson.errors) {
          dispatch(logIn(userJson));
        }
      })
      .catch(error => dispatch(logInError(error)));
  };
};


//sign in
export const newUser = userInfo => {
  return dispatch => {
    return fetch(baseURL + "users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userJson => {
        if (userJson.error) {
          localStorage.removeItem('token')
        } else {
          dispatch(createUser(userJson))
        }
      })
      .catch(error => console.log(error))
  }
}

//get all users
export const getAllUsers = () => {
  return dispatch => {
    return fetch(baseURL + 'users')
      .then(resp => resp.json())
      .then(usersJson => {
        dispatch(getUsers(usersJson))
      })
  }
}

//getting stripe user
export const getStripeAct = (stripeUid) => {
  return dispatch => {
    return fetch('https://api.stripe.com/v1/account', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_STRIPE_SECRET_KEY,
        "Stripe-Account": stripeUid
      }
    })
      .then(resp => resp.json())
      .then(stripeObj => {
        dispatch(getStripeAccount(stripeObj))
      })
  }
}

//getting stripe balance
export const gettingStripeBalance = (stripeUid) => {
  return dispatch => {
    return fetch('https://api.stripe.com/v1/balance', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_STRIPE_SECRET_KEY,
        "Stripe-Account": stripeUid
      }
    })
      .then(resp => resp.json())
      .then(balanceData => {
        dispatch(getStripeBalance(balanceData))
      })
  }
}

export const gettingStripeBalanceHistory = (stripeUid) => {
  return dispatch => {
    return fetch('https://api.stripe.com/v1/balance/history', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.REACT_APP_STRIPE_SECRET_KEY,
        "Stripe-Account": stripeUid
      }
    })
      .then(resp => resp.json())
      .then(balanceData => {
        dispatch(getStripeBalanceHistory(balanceData))
      })
  }
}
