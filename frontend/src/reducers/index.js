import { combineReducers } from "redux";

import { profileSelected } from "./login";

export default combineReducers({
  profile: profileSelected,
});
