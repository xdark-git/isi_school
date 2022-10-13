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

export const signUpEtudiantAction = (formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line
    const newUser = await api.signUpEtudiant(formData);
    dispatch({ type: openAlertDialog, message: "Utilisateur créé" });
    dispatch({ type: closeLoaderComponent });
  } catch (error) {
    dispatch({ type: closeLoaderComponent });
    // if (error?.response?.status === 409)
    dispatch({ type: openAlertDialog, message: "Erreur survenue" });
  }
};
export const signUpProfesseurAction = (formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line
    const newUser = await api.signUpProfesseur(formData);
    dispatch({ type: openAlertDialog, message: "Utilisateur créé" });
    dispatch({ type: closeLoaderComponent });
  } catch (error) {
    dispatch({ type: closeLoaderComponent });
    // if (error?.response?.status === 409)
    // console.log(error?.reponse?.data);
    dispatch({ type: openAlertDialog, message: "Erreur survenue" });
  }
};
export const signUpAdministrateurAction = (formData) => async (dispatch) => {
  try {
    // eslint-disable-next-line
    const newUser = await api.signUpAdministrateur(formData);
    dispatch({ type: openAlertDialog, message: "Utilisateur créé" });
    dispatch({ type: closeLoaderComponent });
  } catch (error) {
    dispatch({ type: closeLoaderComponent });
    // if (error?.response?.status === 409)
    // console.log(error?.reponse?.data);
    dispatch({ type: openAlertDialog, message: "Erreur survenue" });
  }
};
