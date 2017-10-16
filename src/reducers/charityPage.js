function charityPage(state = [], action) {

	switch(action.type) {

		case 'TOGGLE_ABOUT_US':
      return {...state, aboutUsVisible: !state.aboutUsVisible}
    case 'TOGGLE_VIDEO':
	   	return {...state, videoVisible: !state.videoVisible}

		default:
			return state

	}
}

export default charityPage
