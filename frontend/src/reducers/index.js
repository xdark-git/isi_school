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
import { navigationBar } from "./singleReducers/navigationBar";
import { displayInformationReducer } from "./singleReducers/information";

export default combineReducers({
  profile: profileSelectedReducer,
  navigationBar,
  signin: signinUserReducer,
  stateMenuDialog: menuDialogReducer,
  stateLogoutDialog: logoutDialogReducer,
  stateNewClassDialog: newClassDialogReducer,
  stateAlertDialog: alertDialogReducer,
  stateProfEtudiantDialog: listProfEtudiantReducer,
  stateDeleteDialog: deleteDialogReducer,
  stateListContenusDialog: listContenusDialogReducer,
  stateListInformation: displayInformationReducer,
  classes: getAllClassesReducers,
  classe: getOneClasseReducer,
  createClasse: createOneClasseReducer,
  cours: getOneCoursReducers,
  contenuCours: contenuCoursCreation,
  isLoading: loaderReducer,
});
