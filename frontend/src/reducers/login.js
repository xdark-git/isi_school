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
    case "LOGIN":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};
