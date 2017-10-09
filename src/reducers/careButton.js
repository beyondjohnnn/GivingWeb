function careButton(state = [], action) {
  switch(action.type) {
    case 'SHOW_TOOLTIP':
      return {...state, tooltipVisible: !state.tooltipVisible}
    default:
      return state

  }
}

export default careButton;
