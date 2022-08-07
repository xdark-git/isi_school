import { configureStore, createSlice } from "@reduxjs/toolkit";

const profilOnClickSlice = createSlice({
  name: "profil_on_click",
  initialState: { etudiant: "btn-profil checked", professeur: "btn-profil" },
  reducers: {
    professeur(state, action) {
      state.etudiant = "btn-profil";
      state.professeur = "btn-profil checked";
    },
    etudiant(state, action) {
        state.etudiant = "btn-profil checked";
        state.professeur = "btn-profil";
    },
  },
});

export const actions = profilOnClickSlice.actions;
const store = configureStore({
  reducer: profilOnClickSlice.reducer,
});
export default store;
