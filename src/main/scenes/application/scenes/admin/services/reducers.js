import { act } from "react-dom/test-utils";

export function notes(state = {}, action) {
  switch (action.type) {
    case "NOTES_GETALL":
      return {
        notes: action.notes,
      };
    case "NOTE_ADD":
      return {
        notes: action.notes,
      };
    case "NOTE_UPDATE":
      return {
        notes: state.notes.map((note) =>
          note.id === action.note.id ? action.note : note
        ),
      };
    case "DELETE_NOTE": {
      return {
        notes: state.notes.filter((note) => note.id !== action.id),
      };
    }
    default:
      return state;
  }
}

export function users(state = {}, action) {
  switch (action.type) {
    case "USERS_GETALL":
      return {
        users: action.users,
      };

    case "USER_UPDATE":
      return {
        users: state.users.map((user) =>
          user.id === action.user.id ? action.user : user
        ),
      };

    case "DELETE_USER": {
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    }
    default:
      return state;
  }
}
