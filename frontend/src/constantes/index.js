//  Reducers actions
export const ETUDIANT = "ETUDIANT";
export const PROFESSEUR = "PROFESSEUR";
export const LOGIN = "LOGIN";
export const LOGINERROR = "LOGINERROR";
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

// dialogs

export const openMenuDialog = "OPEN_MENU_DIALOG";
export const closeMenuDialog = "CLOSE_MENU_DIALOG";
export const menuDialogOpened = "MENU_DIALOG_OPENED";
export const menuDialogClosed = "MENU_DIALOG_CLOSED";

export const openLogoutDialog = "OPEN_LOGOUT_DIALOG";
export const closeLogoutDialog = "CLOSE_LOGOUT_DIALOG";
export const logoutDialogOpened = "LOGOUT_DIALOG_OPENED";
export const logoutDialogClosed = "LOGOUT_DIALOG_CLOSED";

export const openNewClassDialog = "OPEN_NEW_CLASS_DIALOG";
export const closeNewClassDialog = "CLOSE_NEW_CLASS_DIALOG";
export const newClassDialogOpened = "NEW_CLASS_DIALOG_OPENED";
export const newClassDialogClosed = "NEW_CLASS_DIALOG_CLOSED";
