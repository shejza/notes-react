import { combineReducers } from "redux";
import { notes } from "../main/scenes/application/scenes/admin/services/reducers";
import { users } from "../main/scenes/application/scenes/admin/services/reducers";
import { auth } from "../main/scenes/auth/services/reducers";
const rootReducer = combineReducers({
  notes,
  users,
  auth,
});

export default rootReducer;
