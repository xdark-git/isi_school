const initialProfileState = {
  etudiant: "btn-profil checked",
  professeur: "btn-profil",
  profile: "etudiant",
};

export default (profile = initialProfileState, action) => {
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