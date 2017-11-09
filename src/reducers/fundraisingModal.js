const defaultState = {
  fundraisingModalVisible: false
}

function fundraisingModal(state = defaultState, action) {
  switch(action.type) {
    case 'TOGGLE_MODAL':
      return {...state, fundraisingModalVisible: !state.fundraisingModalVisible}
    default:
      return state

  }
}

export default fundraisingModal;
