function addFormVisible (state = false, action) {
  switch (action.type) {
    case 'TOGGLE_ADD_FORM_ON':
      return true
    case 'TOGGLE_ADD_FORM_OFF':
      return false
    default:
      return state
  }
}

export default addFormVisible
