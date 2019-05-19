// DISPATCH

export const loginModalOpen = () => {
  return { type: 'LOGIN_MODAL_OPEN' }
}

export const loginModalClose = () => {
  return { type: 'LOGIN_MODAL_CLOSE' }
}

export const signupModalOpen = () => {
  return { type: 'SIGNUP_MODAL_OPEN' }
}

export const signupModalClose = () => {
  return { type: 'SIGNUP_MODAL_CLOSE' }
}

export const donationModalOpen = () => {
  return { type: 'DONATION_MODAL_OPEN' }
}

export const donationModalClose = () => {
  return { type: 'DONATION_MODAL_CLOSE' }
}

export const stripeModalOpen = () => {
  return { type: 'STRIPE_MODAL_OPEN' }
}

export const stripeModalClose = () => {
  return { type: 'STRIPE_MODAL_CLOSE' }
}