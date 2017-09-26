function auth(state = [], action) {
	switch(action.type) {
		case 'SIGNUP_POST_PENDING':
      		return Object.assign({}, state, { fetching: true })
    	case 'SIGNUP_POST_REJECTED':
      		return Object.assign({}, state, { fetching: true, error: action.payload })
    	case 'SIGNUP_POST_FULFILLED':
          const jwt = JSON.stringify(action.payload.data.auth_token)
          localStorage.setItem('jwt', jwt)
      		return Object.assign({}, state, { fetching: false, fetched: true, user: action.payload.data })
      	case 'LOGIN_POST_PENDING':
      		return Object.assign({}, state, { fetching: true })
    	case 'LOGIN_POST_REJECTED':
      		return Object.assign({}, state, { fetching: true, error: action.payload })
    	case 'LOGIN_POST_FULFILLED':
      		return Object.assign({}, state, { fetching: false, fetched: true, user: action.payload.data })
		default:
			return state
	}
}

export default auth