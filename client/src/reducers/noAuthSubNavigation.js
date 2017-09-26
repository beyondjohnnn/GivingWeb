function noAuthSubNavigation(state = [], action) {

  switch(action.type) {
    case 'SET_CURRENT_LANDING_PAGE_COMPONENT':
      return Object.assign({}, state, {currentLandingPageComponent: action.dropdownRef})
    default:
      return state
  }
}


export default noAuthSubNavigation