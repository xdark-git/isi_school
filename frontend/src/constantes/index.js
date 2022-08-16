//  Reducers actions
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// cookies names
export const USER_COOKIE_NAME = "dfhgoanvsm1233jdhfHD";

//cookie options
export const USER_COOKIE_OPTION = {
  path: "/",
  expires: new Date(Date.now() + 86400000),
  domaine: toString(window?.location?.origin),
  sameSite: "Strict",
};
