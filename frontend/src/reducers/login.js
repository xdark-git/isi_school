import Cookies from "universal-cookie";

import { LOGIN, USER_COOKIE_NAME, USER_COOKIE_OPTION } from "../constantes";

const cookies = new Cookies();

const initialProfileState = {
  etudiant: "btn-profil checked",
  professeur: "btn-profil",
  profile: "etudiant",
};

export const profileSelectedReducer = (profile = initialProfileState, action) => {
  switch (action.type) {
    case "ETUDIANT":
      return initialProfileState;
    case "PROFESSEUR":
      return {
        etudiant: "btn-profil ",
        professeur: "btn-profil checked",
        profile: "prefesseur",
      };
    default:
      return profile;
  }
};

export const signinEtudiantReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case LOGIN:
      cookies.set(USER_COOKIE_NAME, action?.data, USER_COOKIE_OPTION);
      console.log(cookies.get(USER_COOKIE_NAME));

      // localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action?.data };
    default:
      return state;
  }
};
