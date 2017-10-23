const defaultState = {
  members: [],
}

function helpSomeone(state = defaultState, action) {
  console.log("state: ", action.type);
	switch(action.type) {
		case 'GET_FEATURED_MEMBERS_PENDING':
      return {...state, fetching: true}
  	case 'GET_FEATURED_MEMBERS_REJECTED':
      return {...state, fetching: true, error: action.payload}
  	case 'GET_FEATURED_MEMBERS_FULFILLED':
      return {...state, fetching: true, fetched: true, members: action.payload.data}
    default:
			return state
	}
}

export default helpSomeone;
