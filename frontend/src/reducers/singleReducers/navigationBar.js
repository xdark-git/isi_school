import {
  LOGOUT,
  ON_CLASSE_PAGE,
  ON_INFORMATION_PAGE,
  ON_PROFILE_PAGE,
  ON_USERS_PAGE,
} from "../../constantes";

const initialState = {
  profil: "profile",
  classe: "classes checked",
  information: "informations",
  users: "admin-users",
};

export const navigationBar = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ON_PROFILE_PAGE:
      return {
        profil: "profile checked",
        classe: "classes",
        information: "informations",
        users: "admin-users",
      };
    case ON_INFORMATION_PAGE:
      return {
        profil: "profile",
        classe: "classes",
        information: "informations checked",
        users: "admin-users",
      };
    case ON_USERS_PAGE:
      return {
        profil: "profile",
        classe: "classes",
        information: "informations",
        users: "admin-users checked",
      };
    case ON_CLASSE_PAGE:
      return initialState;
    case LOGOUT:
      return initialState;
    default:
      return initialState;
  }
};
