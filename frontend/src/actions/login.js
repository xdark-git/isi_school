import * as api from "../api";

export const signinEtudiant = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signEtudiant(formData);

    dispatch({ type: "LOGIN", data });

    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
