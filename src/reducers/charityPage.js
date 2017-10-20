const defaultState = {
	charity_id: 1,
	members: [],
	//TODO: charity id needs to be set to dynamic
	aboutUsVisible: false,
  story: {}
}

function charityPage(state = defaultState, action) {
	switch(action.type) {
		case 'TOGGLE_ABOUT_US':
      return {...state, aboutUsVisible: !state.aboutUsVisible}
    case 'TOGGLE_VIDEO':
	   	return {...state, videoVisible: !state.videoVisible}


		case 'GET_CHARITY_FEATURED_MEMBERS_PENDING':
	    return {...state, fetching: true}
		case 'GET_CHARITY_FEATURED_MEMBERS_REJECTED':
	    return {...state, fetching: true, error: action.payload}
		case 'GET_CHARITY_FEATURED_MEMBERS_FULFILLED':
	    return {...state, fetching: true, fetched: true, members: action.payload.data}

		default:
			return state
	}
}

export default charityPage
