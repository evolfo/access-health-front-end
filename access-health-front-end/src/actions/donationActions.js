// DISPATCH

export const createDonation = donationObj => {
  return { type: "CREATE_DONATION", payload: donationObj }
}

// THUNK 

export const createADonation = donation => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/donations', {
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
       dipatch(createDonation(donationObj))
     })
 }
}
