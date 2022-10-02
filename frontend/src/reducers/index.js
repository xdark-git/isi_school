import { combineReducers } from "redux";
import {
  alertDialogReducer,
  deleteDialogReducer,
  listContenusDialogReducer,
  listProfEtudiantReducer,
  logoutDialogReducer,
  menuDialogReducer,
  newClassDialogReducer,
} from "./singleReducers/dialogs";

import { profileSelectedReducer, signinUserReducer } from "./singleReducers/login";
import {
  getAllClassesReducers,
  getOneClasseReducer,
  createOneClasseReducer,
} from "./singleReducers/classes";
import { loaderReducer } from "./singleReducers/loader";
import { getOneCoursReducers, contenuCoursCreation } from "./singleReducers/cours";

export default combineReducers({
  profile: profileSelectedReducer,
  signin: signinUserReducer,
  stateMenuDialog: menuDialogReducer,
  stateLogoutDialog: logoutDialogReducer,
  stateNewClassDialog: newClassDialogReducer,
  stateAlertDialog: alertDialogReducer,
  stateProfEtudiantDialog: listProfEtudiantReducer,
  stateDeleteDialog: deleteDialogReducer,
  stateListContenusDialog: listContenusDialogReducer,
  classes: getAllClassesReducers,
  classe: getOneClasseReducer,
  createClasse: createOneClasseReducer,
  cours: getOneCoursReducers,
  contenuCours: contenuCoursCreation,
  isLoading: loaderReducer,
});
