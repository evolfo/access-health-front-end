export const fetchCAMPAIGNSBegin = () => ({
  type: 'FETCH_CAMPAIGNS_BEGIN'
});

export const fetchCAMPAIGNSSuccess = campaigns => ({
  type: 'FETCH_CAMPAIGNS_SUCCESS',
  payload: { campaigns }
});

export const fetchCAMPAIGNSFailure = error => ({
  type: 'FETCH_CAMPAIGNS_FAILURE',
  payload: { error }
});