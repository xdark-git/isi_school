import { combineReducers } from "redux";

import { profileSelectedReducer, signinUserReducer } from "./login";

export default combineReducers({
  profile: profileSelectedReducer,
  signin: signinUserReducer,
});
