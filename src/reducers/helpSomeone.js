
const defaultState = {
	members: [],
	current_member: {
		donations: [],
		comments: [],
		info: '',
		name: 'Charlie'
	}
}

function helpSomeone(state = defaultState, action) {
	switch(action.type) {
    case 'GET_MEMBERS_PENDING':
      return {...state, fetching: true}
  	case 'GET_MEMBERS_REJECTED':
      return {...state, fetching: true, error: action.payload}
  	case 'GET_MEMBERS_FULFILLED':
      return {...state, fetching: true, fetched: true, members: action.payload.data}
    case 'GET_SINGLE_MEMBER_PENDING':
      return {...state, fetching: true}
    case 'GET_SINGLE_MEMBER_REJECTED':
      return {...state, fetching: true, error: action.payload}
    case 'GET_SINGLE_MEMBER_FULFILLED':
      return {...state, fetching: true, fetched: true, current_member: action.payload.data}
    case 'SET_CURRENT_MEMBER':
      return {...state, current_member: action.member}
    default:
			return state
	}
}

export default helpSomeone;
