const defaultState = {
  members: [],
  membersToShow: 6,
  current_member: {
    donations: [],
    comments: [],
    info: '',
    name: 'Charlie',
    goal: 0
  },
  select: {
    open: false,
    donationAmount: 10
  }
}

function helpSomeone(state = defaultState, action) {
	switch(action.type) {

		case 'SET_MEMBERS_COUNT':
			return {...state, membersToShow: action.membersToShow}

    case 'GET_MEMBERS_PENDING':
      return {...state, fetching: true}
  	case 'GET_MEMBERS_REJECTED':
      return {...state, fetching: true, error: action.payload}
  	case 'GET_MEMBERS_FULFILLED':
      return {...state, fetching: true, fetched: true, members: action.payload.data}

		case 'GET_FEATURED_MEMBERS_PENDING':
      return {...state, fetching: true}
  	case 'GET_FEATURED_MEMBERS_REJECTED':
      return {...state, fetching: true, error: action.payload}
  	case 'GET_FEATURED_MEMBERS_FULFILLED':
      return {...state, fetching: true, fetched: true, members: action.payload.data}

    case 'GET_SINGLE_MEMBER_PENDING':
      return {...state, fetching: true}
    case 'GET_SINGLE_MEMBER_REJECTED':
      return {...state, fetching: true, error: action.payload}
    case 'GET_SINGLE_MEMBER_FULFILLED':
      return {...state, fetching: true, fetched: true, current_member: action.payload.data}
    case 'SET_CURRENT_MEMBER':
      return {...state, current_member: action.member}


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

export default helpSomeone;
