const BASE_URL = 'https://access-health-api.herokuapp.com'

// DISPATCH

export const createDonation = donationObj => {
  return { type: "CREATE_DONATION", payload: donationObj }
}

const getDonations = donationsObj => {
  return { type: 'GET_DONATIONS', payload: donationsObj }
}

// THUNK 

export const createADonation = donation => {
  return dispatch => {
    fetch(BASE_URL + '/api/v1/donations', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ donation })
   })
     .then(resp => resp.json())
     .then(donationObj => {
       dispatch(createDonation(donationObj))
     })
 }
}

export const getAllDonations = () => {
  return dispatch => {
    fetch(BASE_URL + '/api/v1/donations')
    .then(resp => resp.json())
    .then(donationsObj => {
      dispatch(getDonations(donationsObj))
    })
  }
}