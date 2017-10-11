
function newMemberProcess(state = [], action) {
	switch(action.type) {
		case 'SET_CURRENT_NEW_MEMBER_TAB':
      return { ...state, tab: action.tab }
    case 'CHANGE_IMAGE':
    	return { ...state, file: action.file, imagePreviewUrl: action.imagePreviewUrl }
    case 'SUBMIT_NEW_MEMBER_BASICS':
    	return { ...state, ...action.details, tab: 'story'}
    case 'SUBMIT_NEW_MEMBER_STORY':
    	return { ...state, ...action.details, tab: 'cover-photo'}
		default:
			return state
	}
}

export default newMemberProcess