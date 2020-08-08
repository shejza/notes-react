export function auth(state = {}, action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        registered: true,
      };
    case "LOGIN_ERROR":
      return {
        error: action.error,
      };

    default:
      return state;
  }
}
