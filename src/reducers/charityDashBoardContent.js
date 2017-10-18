const defaultState = {
  charityFeaturedMembers: []
}

function charityDashBoardContent(state = defaultState, action) {
  switch(action.type) {

		case 'GET_CHARITY_FEATURED_MEMBERS_PENDING':
	    return {...state, fetching: true}
		case 'GET_CHARITY_FEATURED_MEMBERS_REJECTED':
	    return {...state, fetching: true, error: action.payload}
		case 'GET_CHARITY_FEATURED_MEMBERS_FULFILLED':
	    return {...state, fetching: true, fetched: true, charityFeaturedMembers: action.payload.data}

		case 'POST_CHARITY_FEATURED_MEMBERS_PENDING':
	    return {...state, fetching: true}
		case 'POST_CHARITY_FEATURED_MEMBERS_REJECTED':
	    return {...state, fetching: true, error: action.payload}
		case 'POST_CHARITY_FEATURED_MEMBERS_FULFILLED':
	    return {...state, fetching: true, fetched: true, charityFeaturedMembers: action.payload.data}

		case 'DELETE_CHARITY_FEATURED_MEMBERS_PENDING':
	    return {...state, fetching: true}
		case 'DELETE_CHARITY_FEATURED_MEMBERS_REJECTED':
	    return {...state, fetching: true, error: action.payload}
		case 'DELETE_CHARITY_FEATURED_MEMBERS_FULFILLED':
	    return {...state, fetching: true, fetched: true, charityFeaturedMembers: action.payload.data}

    default:
      return state
  }
}

export default charityDashBoardContent;
