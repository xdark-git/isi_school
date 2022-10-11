import * as api from "../../api";
import {
  closeDeleteDialog,
  closeLoaderComponent,
  closeNewClassDialog,
  ERRORONCLASSECREATION,
  openAlertDialog,
} from "../../constantes";
import { getOne } from "./getClasses";

export const createClasse = (formData, navigate) => async (dispatch) => {
  try {
    const classe = await api.createNewClasse(formData);
    dispatch({ type: openAlertDialog, message: "Cours créé" });
    dispatch({ type: closeLoaderComponent });
    // dispatch({ type: closeNewClassDialog });
    // dispatch(getOne(classe?.data?._id, navigate));
  } catch (error) {
    dispatch({ type: closeLoaderComponent });
    if (error.response.status === 409 || error.response.status === 400)
      dispatch({ type: ERRORONCLASSECREATION, errors: error?.response?.data });
    if (error?.response?.status === 500)
      dispatch({ type: ERRORONCLASSECREATION, errors: error?.response?.data });
  }
};

export const updateName = (id, formData, navigate) => async (dispatch) => {
  try {
    const classe = await api.updateClasseName(id, formData);
    dispatch(getOne(id, navigate));
    dispatch({ type: closeNewClassDialog });
    dispatch({ type: openAlertDialog, message: classe?.data?.message });
  } catch (error) {
    dispatch({ type: closeLoaderComponent });
    if (error.response.status === 409 || error.response.status === 400)
      dispatch({ type: ERRORONCLASSECREATION, errors: error?.response?.data });
    if (error?.response?.status === 500)
      dispatch({ type: ERRORONCLASSECREATION, errors: error?.response?.data });
  }
};

export const deleteClasse = (id, navigate) => async (dispatch) => {
  try {
    const classe = await api.deleteOneClasse(id);
    dispatch({ type: closeDeleteDialog });
    navigate("/classes");
    dispatch({ type: openAlertDialog, message: classe?.data?.message });
  } catch (error) {
    dispatch({ type: closeDeleteDialog });
    if (error?.response?.status === 404) {
      navigate("/classes");
      dispatch({ type: openAlertDialog, message: error?.response?.data?.message });
    }
  }
};
