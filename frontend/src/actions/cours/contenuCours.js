import * as api from "../../api";
import {
  CLOSE_CREATION_CONTENU_COURS_DIALOG,
  FOUND_ERROR_ON_CONTENU_COURS_CREATION,
  openAlertDialog,
} from "../../constantes";

export const addContenuCoursAction = (idCours, formdata, navigate) => async (dispatch) => {
  try {
    const contenuCours = await api.addContenuCours(formdata);
    dispatch({ type: openAlertDialog, message: contenuCours?.data?.message });
    // navigate("/cours")
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    dispatch({ type: CLOSE_CREATION_CONTENU_COURS_DIALOG });
  } catch (error) {
    // handdle error
    // console.log(error.response.status, error.response.data);
    if (error.response.status === 409 || error.response.status === 400)
      dispatch({ type: FOUND_ERROR_ON_CONTENU_COURS_CREATION, error: error.response.data });
  }
};
