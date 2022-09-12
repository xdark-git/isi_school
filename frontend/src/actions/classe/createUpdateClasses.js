import * as api from "../../api";
import { closeNewClassDialog, ERRORONCLASSECREATION } from "../../constantes";
import { getOne } from "./getClasses";

export const createClasse = (formData, navigate) => async (dispatch) => {
  try {
    const classe = await api.createNewClasse(formData);
    dispatch(getOne(classe?.data?._id, navigate));
    dispatch({ type: closeNewClassDialog });
  } catch (error) {
    if (error.response.status === 409)
      dispatch({ type: ERRORONCLASSECREATION, errors: error?.response?.data });
    if (error?.response?.status === 500)
      dispatch({ type: ERRORONCLASSECREATION, errors: error?.response?.data });
  }
};
