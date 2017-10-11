import saveAuthTokenToLocalStorage from '../utils/saveAuthTokenToLocalStorage'

function auth(state = [], action) {
	switch(action.type) {
		case 'SIGNUP_POST_PENDING':
      return {...state, fetching: true}
  	case 'SIGNUP_POST_REJECTED':
     return {...state, fetching: true, error: action.payload}
  	case 'SIGNUP_POST_FULFILLED':
      saveAuthTokenToLocalStorage(action.payload.data.auth_token)
      return {...state, fetching: false, fetched: true, user: action.payload.data}
  	case 'LOGIN_POST_PENDING':
      return {...state, fetching: true}
  	case 'LOGIN_POST_REJECTED':
      return {...state, fetching: true, error: action.payload}
  	case 'LOGIN_POST_FULFILLED':
      saveAuthTokenToLocalStorage(action.payload.data.auth_token)
      return {...state, fetching: false, fetched: true, user: action.payload.data}
    case 'CHARITY_LOGIN_POST_PENDING':
      return {...state, fetching: true}
    case 'CHARITY_LOGIN_POST_REJECTED':
      return {...state, fetching: true, error: action.payload}
    case 'CHARITY_LOGIN_POST_FULFILLED':
      saveAuthTokenToLocalStorage(action.payload.data.auth_token)
      return {...state, fetching: false, fetched: true, charity: action.payload.data}
		default:
			return state
	}
}

export default auth