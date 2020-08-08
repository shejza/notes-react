export function notes(state = {}, action) {
  switch (action.type) {
    case "NOTES_GETALL":
      return {
        notes: action.notes,
      };
    case "NOTE_ADD":
      return {
        notes: [...state.notes, action.note],
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
