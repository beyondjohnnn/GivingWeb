function navigation(state = [], action) {
	switch(action.type) {
		case 'TOGGLE_DROPDOWN':
      return Object.assign({}, state, {dropdownVisible: !state.dropdownVisible})
    default:
			return state

	}
}

export default navigation