import { combineReducers } from "redux";
import { notes } from "../main/scenes/application/scenes/admin/services/reducers";
import { users } from "../main/scenes/application/scenes/admin/services/reducers";
const rootReducer = combineReducers({
  notes,
  users,
});

export default rootReducer;
