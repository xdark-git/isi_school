import * as api from "../api";
import { LOGIN, LOGINERROR } from "../constantes";

export const signinEtudiant = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signEtudiant(formData);

    dispatch({ type: LOGIN, data });

    navigate("/dashboard");
  } catch (error) {
    if (error.response?.data?.message === "Invalid credential") {
      const data = "informations d'identification invalides";
      dispatch({ type: LOGINERROR, data });
    }
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
  }
};

export const signinProfesseur = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signProfesseur(formData);
    dispatch({ type: LOGIN, data });

    navigate("/dashboard");
  } catch (error) {
    if (error.response?.data?.message === "Invalid credential") {
      const data = "informations d'identification invalides";
      dispatch({ type: LOGINERROR, data });
    }
  }
};

export const signinAdminitration = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signAdministration(formData);
    dispatch({ type: LOGIN, data });

    navigate("/dashboard");
  } catch (error) {
    if (error.response?.data?.message === "Invalid credential") {
      const data = "informations d'identification invalides";
      dispatch({ type: LOGINERROR, data });
    }
  }
};
