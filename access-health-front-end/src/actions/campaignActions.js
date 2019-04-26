// DISPATCH

const getCampaigns = campaignObj => {
  return { type: 'GET_CAMPAIGNS', payload: campaignObj }
};

const createCampaign = campaignObj => {
  return { type: 'CREATE_CAMPAIGN', payload: campaignObj }
};

// const getCampaigns = campaignObj => ({
//   return { type: 'GET_CAMPAIGNS', payload: campaignObj }
// });

// THUNK

//loading all campaigns
export const loadCampaigns = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/campaigns")
      .then(resp => resp.json())
      .then(campaigns => {

        dispatch(getCampaigns(campaigns));
      });
  };
};

//creating a campaign
export const creatingCampaign = (formData) => {
  return dispatch => {
  	return fetch('http://localhost:3000/api/v1/campaigns', {
  	  method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      },
      body: formData
  	})
  	  .then(resp => resp.json())
  	  .then(campaign => {
  	  	dispatch(createCampaign(campaign))
  	  })
  }
}