const baseURL = 'http://localhost:3000/api/v1/'

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
  console.log(error);
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

const donateToCampaign = stripeObj => {
  return { type: 'DONATE_TO_CAMPAIGN', payload: stripeObj }
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
    return fetch('http://localhost:3000/api/v1/users')
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
        "Authorization": "Bearer sk_test_OOGLW3DrfgOpxZtbFzMPnus900HMYLzQtw",
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
        "Authorization": "Bearer sk_test_OOGLW3DrfgOpxZtbFzMPnus900HMYLzQtw",
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
        "Authorization": "Bearer sk_test_OOGLW3DrfgOpxZtbFzMPnus900HMYLzQtw",
        "Stripe-Account": stripeUid
      }
    })
      .then(resp => resp.json())
      .then(balanceData => {
        dispatch(getStripeBalanceHistory(balanceData))
      })
  }
}

export const donatingToCampaign = () => {
  debugger
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/charge', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ })
    })
  }
}