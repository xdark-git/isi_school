import * as api from "../../api";
import { GETALLCLASSES } from "../../constantes";

export const getAll = () => async (dispatch) => {
  try {
    const classe = await api.getAllClasses();
    const data = classe?.data;

    dispatch({ type: GETALLCLASSES, data });
  } catch (error) {
    console.log(error);
  }
};
