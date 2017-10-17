const defaultState = {
	currentCharityDashboardSidebarTab: "Members"
}

function charityDashboardSidebar(state = defaultState, action) {
  switch(action.type) {
    case 'SET_CURRENT_CHARITY_DASHBOARD_SIDEBAR_TAB':
      return Object.assign({}, state, {currentCharityDashboardSidebarTab: action.dropdownRef})
    default:
      return state
  }
}


export default charityDashboardSidebar