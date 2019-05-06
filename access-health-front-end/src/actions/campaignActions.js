// DISPATCH

const getCampaigns = campaignObj => {
  return { type: 'GET_CAMPAIGNS', payload: campaignObj }
};

const getSomeCampaigns = campaignObj => {
  return { type: 'GET_SOME_CAMPAIGNS', payload: campaignObj }
};

const createCampaign = campaignObj => {
  return { type: 'CREATE_CAMPAIGN', payload: campaignObj }
};

const editCampaign = (campaignObj) => {
  return { type: 'EDIT_CAMPAIGN', payload: campaignObj }
};

const removeCampaign = (campaignId) => {
  return { type: 'DELETE_CAMPAIGN', payload: campaignId }
}

export const currentCampaign = campaignObj => {
  return { type: 'CURRENT_CAMPAIGN', payload: campaignObj }
}

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

//loading 10 campaigns at a time for the browse page
export const loadSomeCampaigns = offset => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/campaigns?limit=10&offset=${offset}`)
      .then(resp => resp.json())
      .then(campaigns => {
        dispatch(getSomeCampaigns(campaigns));
      });
  };
};


//editing a campaign
export const editingCampaign = (title, description, campaignId) => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/campaigns/' + campaignId, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ title: title, description: description })
    })
      .then(resp => resp.json())
      .then(updatedCampaign => {
        dispatch(editCampaign(updatedCampaign))
      })
  }
}

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

//deleting a campaign
export const deleteCampaign = (campaignId) => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/campaigns/' + campaignId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => dispatch(removeCampaign(campaignId)))
  }
}



