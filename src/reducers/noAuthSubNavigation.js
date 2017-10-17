const defaultState = {
	currentLandingPageComponent: "Whats Happening"
}

function noAuthSubNavigation(state = [], action) {

  switch(action.type) {
    case 'SET_CURRENT_LANDING_PAGE_COMPONENT':
    	return {...state, currentLandingPageComponent: action.dropdownRef}
    default:
      return state
  }
}


export default noAuthSubNavigation