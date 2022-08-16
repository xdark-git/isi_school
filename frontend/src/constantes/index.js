//  Reducers actions
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// cookies names
export const USER_DATA_COOKIE_NAME = "dfhgoanvsm1233jdhfHD";
export const USER_TOKEN_LOCAL_STORAGE_NAME = "qlkdjfaolsfnjl13234j";

//cookie options
export const USER_COOKIE_OPTION = {
  path: "/",
  expires: new Date(Date.now() + 86400000),
  domaine: toString(window?.location?.origin),
  sameSite: "Strict",
};
