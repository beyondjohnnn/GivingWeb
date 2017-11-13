const defaultState = {
  donorTooltipSet: ""
}

function memberPreview(state = defaultState, action) {
  switch(action.type) {
    case 'SET_DONOR_TOOLTIP':
      return {...state, donorTooltipSet: action.comment}
    default:
      return state

  }
}

export default memberPreview
