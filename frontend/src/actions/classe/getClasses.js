import * as api from "../../api";
import { GETALLCLASSES, openAlertDialog } from "../../constantes";

export const getAll = (navigate) => async (dispatch) => {
  try {
    const classe = await api.getAllClasses();
    const data = classe?.data;
    dispatch({ type: GETALLCLASSES, data });
  } catch (error) {
    if (error?.status === 401 || error?.status === 400) {
      navigate("/");
    }
    if (error?.status === 500) {
      dispatch({ type: openAlertDialog, message: "Une erreur s'est produite" });
    }
  }
};
