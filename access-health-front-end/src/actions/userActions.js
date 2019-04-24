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