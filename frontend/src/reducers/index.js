import { combineReducers } from "redux";
import { menuDialogReducer } from "./dialogs";

import { profileSelectedReducer, signinUserReducer } from "./login";

export default combineReducers({
  profile: profileSelectedReducer,
  signin: signinUserReducer,
  stateMenuDialog: menuDialogReducer
});
