export function formValues(state = {}, action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        formValues: [...state.formValues, action.formValues],
      };

    case "LOGIN":
      return { user: action.user };
    default:
      return state;
  }
}
