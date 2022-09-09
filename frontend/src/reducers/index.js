import { combineReducers } from "redux";
import {
  alertDialogReducer,
  listProfEtudiantReducer,
  logoutDialogReducer,
  menuDialogReducer,
  newClassDialogReducer,
} from "./singleReducers/dialogs";

import { profileSelectedReducer, signinUserReducer } from "./singleReducers/login";
import { getAllClassesReducers, getOneClasseReducer } from "./singleReducers/classes";

export default combineReducers({
  profile: profileSelectedReducer,
  signin: signinUserReducer,
  stateMenuDialog: menuDialogReducer,
  stateLogoutDialog: logoutDialogReducer,
  stateNewClassDialog: newClassDialogReducer,
  stateAlertDialog: alertDialogReducer,
  stateProfEtudiantDialog: listProfEtudiantReducer,
  classes: getAllClassesReducers,
  classe: getOneClasseReducer,
});
