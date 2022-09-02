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
