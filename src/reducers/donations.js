const defaultState = {
	selectOpen: false,
	customAmount: false,
	donationAmount: 25
}

function donations(state=defaultState, action) {
	switch(action.type) {
		case 'TOGGLE_DONATION_SELECT':
			return { ...state, selectOpen: !state.selectOpen }
		case 'SET_DONATION_AMOUNT':
			return { ...state, donationAmount: action.donationAmount, selectOpen: !state.selectOpen, customAmount: false}
		case 'SET_CUSTOM_AMOUNT':
			return { ...state, donationAmount: action.donationAmount}
		case 'CUSTOM_DONATION':
			return { ...state, donationAmount: 0, selectOpen: !state.selectOpen, customAmount: true }
		case 'SET_CUSTOM_AMOUNT':
			return { ...state, donationAmount: action.donationAmount, selectOpen: !state.selectOpen }
		default:
			return state
	}
}

export default donations