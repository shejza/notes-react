import { act } from "react-dom/test-utils";

export function notes(state = {}, action) {
  switch (action.type) {
    case "NOTE_ADD":
      return {
        notes: action.notes,
      };

    default:
      return state;
  }
}
