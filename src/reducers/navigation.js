
function navigation(state = [], action) {
	switch(action.type) {
		case 'TOGGLE_DROPDOWN':
			return {...state, dropdownVisible: !state.dropdownVisible}
    default:
			return state

	}
}

export default navigation
