const defaultState = {
	dropdownVisible: false,
	searchResults: null,
	searchResultsVisible: false
}


function navigation(state = defaultState, action) {
	switch(action.type) {
		case 'TOGGLE_DROPDOWN':
			return {...state, dropdownVisible: !state.dropdownVisible}
		case 'CLEAR_SEARCH':
			return {...state, searchResults: null}
		case 'FUZZY_SEARCH_PENDING':
      return {...state, fetching: true}
  	case 'FUZZY_SEARCH_REJECTED':
     return {...state, fetching: false, error: action.payload}
  	case 'FUZZY_SEARCH_FULFILLED':
      return {...state, fetching: false, fetched: true, searchResults: action.payload.data}
    case 'TOGGLE_SEARCH_RESULTS_VISIBILITY':
    	return {...state, searchResultsVisible: !state.searchResultsVisible}
    default:
			return state

	}
}

export default navigation
