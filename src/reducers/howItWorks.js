function howItWorks(state = [], action) {

	switch(action.type) {
		case 'TOGGLE_HOWITWORKS':
			return {...state, howItWorksVisible: !state.howItWorksVisible}
    default:
			return state

	}
}

export default howItWorks