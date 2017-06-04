export const changeAddFormVisibility = (newAddState) => {
  return newAddState
  ? {type: 'TOGGLE_ADD_FORM_OFF'}
  : {type: 'TOGGLE_ADD_FORM_ON'}
}
