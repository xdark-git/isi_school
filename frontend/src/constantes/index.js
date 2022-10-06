// cookies names
export const USER_DATA_COOKIE_NAME = "dfhgoanvsm1233jdhfHD";
export const USER_TOKEN_LOCAL_STORAGE_NAME = "qlkdjfaolsfnjl13234j";

//cookie options
export const USER_COOKIE_OPTION = {
  path: "/",
  expires: new Date(Date.now() + 2592000000),
  domaine: toString(window?.location?.origin),
  sameSite: "Strict",
};
export const months = [
  "janv",
  "févr",
  "mars",
  "avr",
  "mai",
  "juin",
  "juill",
  "août",
  "sept",
  "oct",
  "nov",
  "déc",
];
//  Reducers actions
export const ON_PROFILE_PAGE = "ON_PROFILE_PAGE";
export const ON_CLASSE_PAGE = "ON_CLASSE_PAGE";
export const ON_INFORMATION_PAGE = "ON_INFORMATION_PAGE";
export const ON_USERS_PAGE = "ON_USERS_PAGE";
export const OPENED = "OPENED";
export const CLOSED = "CLOSED";
export const NO_ERROR_FOUND = "NO_ERROR_FOUND";
export const ETUDIANT = "ETUDIANT";
export const PROFESSEUR = "PROFESSEUR";
export const LOGIN = "LOGIN";
export const LOGINERROR = "LOGINERROR";
export const LOGOUT = "LOGOUT";

export const GETALLCLASSES = "GET_ALL_CLASSES";
export const DISPLAYONECLASSE = "DISPLAY_ONE_CLASS";
export const NOCLASSEFOUND = "NO_CLASSE_FOUND";

export const ERRORONCLASSECREATION = "FOUND_ERROR_ON_CLASSE_CREATION";
export const CREATIONCLASSEDIALOGCLOSED = "CREATION_CLASSE_DIALOG_CLOSED";

export const DISPLAYONECOURS = "DISPLAY_ONE_COURS";
export const NOCOURSFOUND = "NO_COURS_FOUND";

export const OPEN_CREATION_CONTENU_COURS_DIALOG = "OPEN_CREATION_CONTENU_COURS_DIALOG";
export const CLOSE_CREATION_CONTENU_COURS_DIALOG = "CLOSE_CREATION_CONTENU_COURS_DIALOG";
export const FOUND_ERROR_ON_CONTENU_COURS_CREATION = "FOUND_ERROR_ON_CONTENU_COURS_CREATION";

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

export const openAlertDialog = "OPEN_ALERT_DIALOG";
export const closeAlertDialog = "CLOSE_ALERT_DIALOG";
export const alertDialogOpened = "ALERT_DIALOG_OPENED";
export const alertDialogClosed = "ALERT_DIALOG_CLOSED";

export const openDeleteDialog = "OPEN_DELETE_DIALOG";
export const closeDeleteDialog = "CLOSE_DELETE_DIALOG";
export const deleteDialogOpened = "DELETE_DIALOG_OPENED";
export const deleteDialogClosed = "DELETE_DIALOG_CLOSED";

export const openListProfEtudiantDialog = "OPEN_LIST_PROF_ETUDIANT_DIALOG";
export const closeListProfEtudiantDialog = "CLOSE_LIST_PROF_ETUDIANT_DIALOG";
export const listProfEtudiantDialogOpened = "LIST_PROF_ETUDIANT_DIALOG_OPENED";
export const listProfEtudiantDialogClosed = "LIST_PROF_ETUDIANT_DIALOG_CLOSED";

export const openLoaderComponent = "OPEN_LOADER_COMPONENT";
export const closeLoaderComponent = "CLOSE_LOADER_COMPENENT";
export const loaderComponentOpened = "LOADER_COMPONENT_OPENED";
export const loaderComponentClosed = "LOADER_COMPONENT_CLOSED";

export const openListContenusDialog = "OPEN_LIST_CONSTENUS_DIALOG";
export const closeListContenusDialog = "CLOSE_LIST_CONSTENUS_DIALOG";
export const listContenusDialogOpened = "LIST_CONSTENUS_DIALOG_OPENED";
export const listContenusDialogClosed = "LIST_CONSTENUS_DIALOG_CLOSED";

export const GET_ALL_INFORMATION_RECEIVED = "GET_ALL_INFORMATION_RECEIVED";
export const GET_ALL_INFORMATION_SENT = "GET_ALL_INFORMATION_SENT";
export const GET_ONE_INFORMATION_RECEIVED = "GET_ONE_INFORMATION_RECEIVED";
export const GET_ONE_INFORMATION_SENT = "GET_ONE_INFORMATION_SENT";

export const DISPLAY_ALL_INFORMAITON_RECEIVED = "DISPLAY_ALL_INFORMAITON_RECEIVED";
export const DISPLAY_ONE_INFORMAITON_RECEIVED = "DISPLAY_ONE_INFORMAITON_RECEIVED";
export const DISPLAY_ALL_INFORMAITON_SENT = "DISPLAY_ALL_INFORMAITON_SENT";
export const DISPLAY_ONE_INFORMAITON_SENT = "DISPLAY_ONE_INFORMAITON_SENT";
