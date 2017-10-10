function charityPage(state = [], action) {

	switch(action.type) {
		case 'TOGGLE_ABOUT_US':
			return {...state, aboutUsVisible: !state.aboutUsVisible}
    default:
			return state

	}
}

export default charityPage