// DISPATCH

const getCampaigns = campaignObj => {
  return { type: 'GET_CAMPAIGNS', payload: campaignObj }
};

// const getCampaigns = campaignObj => ({
//   return { type: 'GET_CAMPAIGNS', payload: campaignObj }
// });

// const getCampaigns = campaignObj => ({
//   return { type: 'GET_CAMPAIGNS', payload: campaignObj }
// });

// THUNK

export const loadCampaigns = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/campaigns")
      .then(resp => resp.json())
      .then(campaigns => {
        dispatch(getCampaigns(campaigns));
      });
  };
};