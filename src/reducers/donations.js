const defaultState = {
	selectOpen: false,
	customAmount: false,
	donationAmount: 25,
	supportChecked: true,
	anonymousDonation: false
}

function donations(state=defaultState, action) {
	switch(action.type) {
		case 'TOGGLE_DONATION_SELECT':
			return { ...state, selectOpen: !state.selectOpen }
		case 'TOGGLE_DONATION_SUPPORT':
			return { ...state, supportChecked: !state.supportChecked }
		case 'TOGGLE_DONATION_ANONYMOUS':
			return { ...state, anonymousDonation: !state.anonymousDonation }
		case 'SET_DONATION_AMOUNT':
			return { ...state, donationAmount: action.donationAmount, selectOpen: !state.selectOpen, customAmount: false}
		case 'SET_CUSTOM_AMOUNT':
			return { ...state, donationAmount: action.donationAmount}
		case 'CUSTOM_DONATION':
			return { ...state, donationAmount: 0, selectOpen: !state.selectOpen, customAmount: true }
		case 'SET_CUSTOM_AMOUNT':
			return { ...state, donationAmount: action.donationAmount, selectOpen: !state.selectOpen }
		case 'SUBMIT_PAYMENT_PENDING':
      return {...state, fetching: true}
  	case 'SUBMIT_PAYMENT_REJECTED':
     return {...state, fetching: true, error: action.payload}
  	case 'SUBMIT_PAYMENT_FULFILLED':
      return {...state, fetching: false, fetched: true, payment: action.payload.data}
		default:
			return state
	}
}

export default donations