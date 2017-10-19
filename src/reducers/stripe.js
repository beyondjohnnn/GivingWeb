const defaultState = {
  
}

function stripe(state = defaultState, action) {
	switch(action.type) {
		case 'SUBMIT_PAYMENT_PENDING':
      return {...state, fetching: true}
  	case 'SUBMIT_PAYMENT_REJECTED':
     return {...state, fetching: true, error: action.payload}
  	case 'SUBMIT_PAYMENT_FULFILLED':
      return {...state, fetching: false, fetched: true, payment: action.payload.data}
		default:
			return state
	}
}

export default stripe
