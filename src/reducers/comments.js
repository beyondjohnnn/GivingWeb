const defaultState = {
	commentText: ''
}

function comments(state = defaultState, action) {
	switch(action.type) {
		case 'UPDATE_NEW_COMMENT_TEXT':
      return {...state, commentText: action.text}
		default:
			return state
	}
}

export default comments