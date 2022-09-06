import Cookies from "universal-cookie";

import {
  LOGIN,
  LOGINERROR,
  USER_DATA_COOKIE_NAME,
  USER_TOKEN_LOCAL_STORAGE_NAME,
  USER_COOKIE_OPTION,
  ETUDIANT,
  PROFESSEUR,
  LOGOUT,
} from "../../constantes";

const cookies = new Cookies();

const initialProfileState = {
  etudiant: "btn-profil checked",
  professeur: "btn-profil",
  profile: ETUDIANT,
};

export const profileSelectedReducer = (profile = initialProfileState, action) => {
  switch (action.type) {
    case ETUDIANT:
      return initialProfileState;
    case PROFESSEUR:
      return {
        etudiant: "btn-profil ",
        professeur: "btn-profil checked",
        profile: PROFESSEUR,
      };
    default:
      return profile;
  }
};

export const signinUserReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case LOGIN:
      const userData = {
        ...action?.data?.data,
        status: action?.data?.status["nom"],
      };
      // const userToken = {
      //   ...action?.data?.token,
      // };

      cookies.set(USER_DATA_COOKIE_NAME, userData, USER_COOKIE_OPTION);
      localStorage.setItem(USER_TOKEN_LOCAL_STORAGE_NAME, action?.data?.token);

      return { authData: action?.data };

    case LOGINERROR:
      console.log(action?.data);
      return { error: action?.data };
    case LOGOUT:
      localStorage.clear();
      cookies.remove(USER_DATA_COOKIE_NAME);
      return { ...state, authData: null };
    default:
      return state;
  }
};
