
function newMemberProcess(state = [], action) {
	switch(action.type) {
		case 'SET_CURRENT_NEW_MEMBER_TAB':
      return { ...state, tab: action.tab }
    case 'CHANGE_IMAGE':
    	return { ...state, file: action.file, imagePreviewUrl: action.imagePreviewUrl }

    case 'SUBMIT_NEW_MEMBER_BASICS':
    	return { ...state, ...action.details, tab: 'story'}
		case 'EDIT_NEW_MEMBER_NAME':
			return { ...state, name: action.name}
		case 'EDIT_NEW_MEMBER_GOAL':
			return { ...state, goal: action.amount}
		case 'EDIT_NEW_MEMBER_LOCATION':
			return { ...state, location: action.location}

		case 'TO_STORY_TAB':
			return { ...state, tab: "story"}

    case 'SUBMIT_NEW_MEMBER_STORY':
    	return { ...state, ...action.details, tab: 'cover-photo'}

		case 'SUBMIT_NEW_MEMBER_PENDING':
      return {...state, fetching: true}
  	case 'SUBMIT_NEW_MEMBER_REJECTED':
      return {...state, fetching: true, error: action.payload}
  	case 'SUBMIT_NEW_MEMBER_FULFILLED':
      return {...state, fetching: true, fetched: true, members: action.payload}

		default:
			return state
	}
}

export default newMemberProcess
