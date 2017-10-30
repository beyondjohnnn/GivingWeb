const defaultState = {
  currentTooltip: ""
}

function pricing(state = defaultState, action) {

  switch(action.type) {
    case 'SET_VISIBLE_TOOLTIP':
      return {...state, currentTooltip: action.dropdownRef}
    default:
      return state
  }
}


export default pricing
