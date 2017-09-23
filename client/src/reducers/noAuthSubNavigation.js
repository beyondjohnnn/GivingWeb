function noAuthSubNavigation(state = [], action) {
  console.log('going through noAuth reducer')

  switch(action.type) {
    case 'SET_CURRENT_LANDING_PAGE_COMPONENT':
      return Object.assign({}, state, {currentLandingPageComponent: action.dropdownRef})
    default:
      return state
  }
}


export default noAuthSubNavigation