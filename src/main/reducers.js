import { combineReducers } from "redux";
import { notes } from "../main/scenes/application/scenes/admin/services/reducers";

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;
