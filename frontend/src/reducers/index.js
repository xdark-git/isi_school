import { combineReducers } from "redux";

import { profileSelectedReducer, signinEtudiantReducer } from "./login";

export default combineReducers({
  profile: profileSelectedReducer,
  signinEtudiant: signinEtudiantReducer,
});
