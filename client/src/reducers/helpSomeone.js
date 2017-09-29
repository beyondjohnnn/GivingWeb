function helpSomeone(state = [], action) {

	console.log(action.type)
	switch(action.type) {
    case 'MEMBERS_PENDING':
  		return Object.assign({}, state, { fetching: true })
  	case 'MEMBERS_REJECTED':
  		return Object.assign({}, state, { fetching: true, error: action.payload })
  	case 'MEMBERS_FULFILLED':
			console.log(action.payload)
			console.log("MEMBERS_FULFILLED!")
      return Object.assign({}, state, { fetching: true, fetched: true, members: action.payload })
    default:
			return state
	}
}

export default helpSomeone;
