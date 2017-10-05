function helpSomeone(state = [], action) {

	switch(action.type) {
    case 'GET_MEMBERS_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'GET_MEMBERS_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'GET_MEMBERS_FULFILLED':
      return Object.assign({}, state, { fetching: true, fetched: true, members: action.payload.data })
    case 'GET_SINGLE_MEMBER_PENDING':
      return Object.assign({}, state, { fetching: true })
    case 'GET_SINGLE_MEMBER_REJECTED':
      return Object.assign({}, state, { fetching: true, error: action.payload })
    case 'GET_SINGLE_MEMBER_FULFILLED':
      return Object.assign({}, state, { fetching: true, fetched: true, current_member: action.payload.data })
    case 'SET_CURRENT_MEMBER':
      return Object.assign({}, state, { current_member: action.member })
    default:
			return state
	}
}

export default helpSomeone;
