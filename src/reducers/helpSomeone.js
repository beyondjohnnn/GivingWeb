function helpSomeone(state = [], action) {

	switch(action.type) {
    case 'MEMBERS_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'MEMBERS_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'MEMBERS_FULFILLED':
      return Object.assign({}, state, { fetching: true, fetched: true, members: action.payload.data })
    default:
			return state
	}
}

export default helpSomeone;
