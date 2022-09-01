import { combineReducers } from "redux";
import { logoutDialogReducer, menuDialogReducer } from "./singleReducers/dialogs";

import { profileSelectedReducer, signinUserReducer } from "./singleReducers/login";

export default combineReducers({
  profile: profileSelectedReducer,
  signin: signinUserReducer,
  stateMenuDialog: menuDialogReducer,
  stateLogoutDialog: logoutDialogReducer
});
