function careButton(state = [], action) {
  switch(action.type) {
    case 'SHOW_TOOLTIP':
      return {...state, tooltipVisable: !state.tooltipVisible}
    default:
      return state

  }
}

export default careButton;
