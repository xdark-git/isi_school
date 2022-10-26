import {
  openMenuDialog,
  closeMenuDialog,
  menuDialogOpened,
  menuDialogClosed,
  openLogoutDialog,
  closeLogoutDialog,
  logoutDialogOpened,
  logoutDialogClosed,
  newClassDialogClosed,
  openNewClassDialog,
  newClassDialogOpened,
  closeNewClassDialog,
  alertDialogClosed,
  openAlertDialog,
  alertDialogOpened,
  closeAlertDialog,
  openListProfEtudiantDialog,
  listProfEtudiantDialogClosed,
  listProfEtudiantDialogOpened,
  closeListProfEtudiantDialog,
  deleteDialogClosed,
  openDeleteDialog,
  deleteDialogOpened,
  closeDeleteDialog,
  openListContenusDialog,
  listContenusDialogOpened,
  closeListContenusDialog,
  listContenusDialogClosed,
  LOGOUT,
  OPEN_NOUVEAU_COURS_DIALOG,
  OPENED,
  CLOSED,
  CLOSE_NOUVEAU_COURS_DIALOG,
} from "../../constantes";
export const menuDialogReducer = (menuDialog = { status: menuDialogClosed }, action) => {
  switch (action.type) {
    case openMenuDialog:
      return (menuDialog = {
        status: menuDialogOpened,
      });
    case closeMenuDialog:
      return (menuDialog = {
        status: menuDialogClosed,
      });
    default:
      return menuDialog;
  }
};

export const logoutDialogReducer = (logoutDialog = { status: logoutDialogClosed }, action) => {
  switch (action.type) {
    case openLogoutDialog:
      return (logoutDialog = {
        status: logoutDialogOpened,
      });
    case closeLogoutDialog:
      return (logoutDialog = {
        status: logoutDialogClosed,
      });
    default:
      return logoutDialog;
  }
};

export const newClassDialogReducer = (
  newClassDialog = { status: newClassDialogClosed },
  action
) => {
  switch (action.type) {
    case openNewClassDialog:
      return (newClassDialog = {
        status: newClassDialogOpened,
      });
    case closeNewClassDialog:
      return (newClassDialog = {
        status: newClassDialogClosed,
      });
    case LOGOUT:
      return newClassDialog;
    default:
      return newClassDialog;
  }
};

export const alertDialogReducer = (alertDialog = { status: alertDialogClosed }, action) => {
  switch (action.type) {
    case openAlertDialog:
      return (alertDialog = {
        status: alertDialogOpened,
        message: action?.message,
      });
    case closeAlertDialog:
      return (alertDialog = {
        status: alertDialogClosed,
      });
    default:
      return alertDialog;
  }
};
export const deleteDialogReducer = (state = { status: deleteDialogClosed }, action) => {
  switch (action.type) {
    case openDeleteDialog:
      return (state = {
        status: deleteDialogOpened,
        target: action?.target,
        id: action?.id,
      });
    case closeDeleteDialog:
      return (state = { status: deleteDialogClosed });
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export const listProfEtudiantReducer = (
  state = { status: listProfEtudiantDialogClosed },
  action
) => {
  switch (action.type) {
    case openListProfEtudiantDialog:
      return (state = {
        status: listProfEtudiantDialogOpened,
        profile: action?.profile,
      });
    case closeListProfEtudiantDialog:
      return (state = {
        status: listProfEtudiantDialogClosed,
        profile: action?.profile,
      });
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export const listContenusDialogReducer = (state = { status: listContenusDialogClosed }, action) => {
  switch (action.type) {
    case openListContenusDialog:
      return (state = { status: listContenusDialogOpened, data: action?.data });
    case closeListContenusDialog:
      return (state = { status: listContenusDialogClosed });
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export const nouveauCoursDialogReducer = (state = { status: CLOSED }, action) => {
  switch (action.type) {
    case OPEN_NOUVEAU_COURS_DIALOG:
      return (state = { status: OPENED });
    case CLOSE_NOUVEAU_COURS_DIALOG:
      return (state = { status: CLOSED });
    case LOGOUT:
      return (state = { status: CLOSED });
    default:
      return state;
  }
};
