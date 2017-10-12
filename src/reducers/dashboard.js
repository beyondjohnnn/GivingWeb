function dashboard(state=[], action) {
	switch(action.type) {
		case 'SET_DASHBOARD_TAB':
			return { ...state, tab: action.tab }
		default:
			return state
	}
}

export default dashboard