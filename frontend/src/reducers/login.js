import Cookies from "universal-cookie";

import {
  LOGIN,
  USER_DATA_COOKIE_NAME,
  USER_TOKEN_LOCAL_STORAGE_NAME,
  USER_COOKIE_OPTION,
} from "../constantes";

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
      const userData = {
        ...action?.data?.data,
        status: action?.data?.status["nom"],
      };
      const userToken = {
        ...action?.data?.token,
      };

      cookies.set(USER_DATA_COOKIE_NAME, userData, USER_COOKIE_OPTION);

      localStorage.setItem(USER_TOKEN_LOCAL_STORAGE_NAME, JSON.stringify(userToken));

      return { ...state, authData: action?.data };
    default:
      return state;
  }
};
