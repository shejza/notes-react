import { apiCalls } from "./api";

export const actions = {
  getAll,
  create,
  update,
  deleteNote,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
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

function update(formValues, noteId) {
  return (dispatch) => {
    apiCalls.updateNote(formValues, noteId).then((data) => {
      dispatch(success(data));
      window.location.reload();
    });
  };

  function success(note) {
    return {
      type: "NOTE_UPDATE",
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

function getAllUsers() {
  return (dispatch) => {
    apiCalls.getUsers().then((users) => dispatch(success(users)));
  };

  function success(users) {
    return {
      type: "USERS_GETALL",
      users,
    };
  }
}

function createUser(formValues) {
  return (dispatch) => {
    apiCalls.createUser(formValues).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));

      dispatch(success());
      window.location.reload();
    });
  };

  function success() {
    return {
      type: "REGISTER_SUCCESS",
    };
  }
}

function updateUser(formValues, userId) {
  return (dispatch) => {
    apiCalls.updateUser(formValues, userId).then((data) => {
      dispatch(success(data));
      window.location.reload();
    });
  };

  function success(user) {
    return {
      type: "USER_UPDATE",
      user,
    };
  }
}

function deleteUser(id) {
  return (dispatch) => {
    apiCalls.deleteUser(id).then(() => {
      dispatch(success(id));
    });
  };

  function success(id) {
    return {
      type: "DELETE_USER",
      id,
    };
  }
}
