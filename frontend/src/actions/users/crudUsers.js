import * as api from "../../api";
import { closeLoaderComponent, GET_ALL_USERS, openAlertDialog } from "../../constantes";

export const getAllUsersAction = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    const data = users?.data;
   
    dispatch({ type: GET_ALL_USERS, data: data });
    dispatch({ type: closeLoaderComponent });
  } catch (error) {
    dispatch({ type: openAlertDialog, message: "Erreur survenue" });
  }
};
