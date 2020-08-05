import { apiCalls } from "./api";

export const actions = {
  getAll,
  create,
  deleteNote,
};

function getAll() {
  return (dispatch) => {
    apiCalls.getNotes().then((notes) => dispatch(success(notes)));
  };

  function success(notes) {
    return {
      type: "NOTES_GETALL",
      notes,
    };
  }
}

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

function deleteNote(id) {
  return (dispatch) => {
    apiCalls.deleteNote(id).then(() => {
      dispatch(success(id));
    });
  };

  function success(id) {
    return {
      type: "DELETE_NOTE",
      id,
    };
  }
}


