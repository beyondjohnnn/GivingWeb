
function newMemberProcess(state = [], action) {
	switch(action.type) {
		case 'SET_CURRENT_NEW_MEMBER_TAB':
      return { ...state, tab: action.tab }
		default:
			return state
	}
}

export default newMemberProcess