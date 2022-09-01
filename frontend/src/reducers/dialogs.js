import { close, closed, open, opened } from "../constantes";
export const menuDialogReducer = (menuDialog = { status: closed }, action) => {
  switch (action.type) {
    case open:
      return (menuDialog = {
        status: opened,
      });
    case close:
      return (menuDialog = {
        status: closed,
      });
    default:
      return menuDialog;
  }
};
