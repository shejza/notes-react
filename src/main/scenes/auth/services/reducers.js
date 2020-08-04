export function formValues(state = {}, action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        formValues: [...state.formValues, action.formValues],
      };

    default:
      return state;
  }
}
