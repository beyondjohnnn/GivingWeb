const defaultState = {
	howItWorksVisible: false
}

function howItWorks(state = defaultState, action) {
	switch(action.type) {
		case 'TOGGLE_HOWITWORKS':
			return {...state, howItWorksVisible: !state.howItWorksVisible}
    default:
			return state

	}
}

export default howItWorks