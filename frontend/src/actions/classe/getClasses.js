import * as api from "../../api";
import {
  closeLoaderComponent,
  DISPLAYONECLASSE,
  GETALLCLASSES,
  NOCLASSEFOUND,
  openAlertDialog,
} from "../../constantes";

export const getAll = (navigate) => async (dispatch) => {
  try {
    const classe = await api.getAllClasses();
    const data = classe?.data;
    dispatch({ type: GETALLCLASSES, data });
    dispatch({ type: closeLoaderComponent });
  } catch (error) {
    if (error?.status === 401 || error?.status === 400) {
      dispatch({ type: closeLoaderComponent });
      navigate("/");
    }
    if (error?.status === 500) {
      dispatch({ type: closeLoaderComponent });
      dispatch({ type: openAlertDialog, message: "Une erreur s'est produite" });
    }
  }
};

export const getOne = (id, navigate) => async (dispatch) => {
  try {
    const classe = await api.getOneClasse(id);
    const data = classe?.data;
    dispatch({ type: DISPLAYONECLASSE, data, opened: true });
    navigate("/classes/" + data?.classe?._id);
    dispatch({ type: closeLoaderComponent });
  } catch (error) {
    dispatch({ type: NOCLASSEFOUND, opened: false });
    dispatch({ type: closeLoaderComponent });
  }
};
