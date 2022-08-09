import { combineReducers } from "redux";

import { profileSelectedReducer } from "./login";

export default combineReducers({
  profile: profileSelectedReducer,
});
