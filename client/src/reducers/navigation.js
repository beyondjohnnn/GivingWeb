function navigation(state = [], action) {
  console.log('going through nav reducer')
	switch(action.type) {
		case 'TOGGLE_DROPDOWN':
      return Object.assign({}, state, {dropdownVisible: !state.dropdownVisible})
    default:
			return state

	}
}

export default navigation