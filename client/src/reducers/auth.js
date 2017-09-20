function auth(state = [], action) {
	switch(action.type) {
		case 'SIGNUP_POST_PENDING':
      		return Object.assign({}, state, { fetching: true })
    	case 'SIGNUP_POST_REJECTED':
      		return Object.assign({}, state, { fetching: true, error: action.payload })
    	case 'SIGNUP_POST_FULFILLED':
      		return Object.assign({}, state, { fetching: false, fetched: true, user: action.payload.data })
		default:
			return state
	}
}

export default auth