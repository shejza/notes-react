import { apiCalls } from "./api";

export const actions = {
  create,
};

function create(formValues) {
  return (dispatch) => {
    apiCalls.createNote(formValues).then((data) => {
      dispatch(success(data));
    });
  };

  function success(note) {
    return {
      type: "NOTE_ADD",
      note,
    };
  }
}
