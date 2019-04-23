// DISPATCH

const logIn = userObj => {
  return { type: 'LOG_IN', payload: userObj }
}

export const logOut = () => {
  return { type: "LOG_OUT" };
};

export const logInPending = () => {
  return { type: "LOG_IN_PENDING" };
};

export const logInError = error => {
  console.log(error);
  return { type: "LOG_IN_ERROR", payload: error };
};

// THUNK

export const getAuth = userInfo => {
  return dispatch => {
    dispatch(logInPending());
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
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