
function newMemberProcess(state = [], action) {
	switch(action.type) {
		case 'SET_CURRENT_NEW_MEMBER_TAB':
      return { ...state, tab: action.tab }
    case 'CHANGE_IMAGE':
    	return { ...state, file: action.file, imagePreviewUrl: action.imagePreviewUrl }
    case 'SUBMIT_NEW_MEMBER_BASICS':
    	return { ...state, ...action.details, tab: 'story'}
		default:
			return state
	}
}

export default newMemberProcess