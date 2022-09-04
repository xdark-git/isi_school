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
    default:
      return newClassDialog;
  }
};

export const alertDialogReducer = (alertDialog = { status: alertDialogClosed }, action) => {
  switch (action.type) {
    case openAlertDialog:
      return (alertDialog = {
        type: action?.type,
        status: alertDialogOpened,
        message: action?.message,
        typeMessage: action?.typeMessage,
      });
    case closeAlertDialog:
      return (alertDialog = {
        type: action?.type,
        status: alertDialogClosed,
        message: action?.message,
        typeMessage: action?.typeMessage,
      });
    default:
      return alertDialog;
  }
};
