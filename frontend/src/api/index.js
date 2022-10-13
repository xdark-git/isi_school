import axios from "axios";

import { USER_TOKEN_LOCAL_STORAGE_NAME } from "../constantes";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_NAME)) {
    req.headers.Authorization = `Bearer ${localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_NAME)}`;
  }
  return req;
});

export const signEtudiant = (formData) => API.post("/user/login/etudiant", formData);
export const signProfesseur = (formData) => API.post("/user/login/professeur", formData);
export const signAdministration = (formData) => API.post("/user/login/administration", formData);

export const signUpEtudiant = (formData) => API.post("/user/add/etudiant", formData);
export const signUpProfesseur = (formData) => API.post("/user/add/professeur", formData);
export const signUpAdministrateur = (formData) => API.post("/user/add/administration", formData);

export const getAllUsers = () => API.get("/user/all");

export const createNewClasse = (formData) => API.post("/classe/create", formData);
export const getAllClasses = () => API.get("/classe");
export const getOneClasse = (id) => API.get("/classe/" + id);
export const updateClasseName = (id, formData) => API.put("/classe/updatename/" + id, formData);
export const deleteOneClasse = (id) => API.delete("/classe/delete/" + id);

export const getOneCours = (id) => API.get("/cours/" + id);
export const addContenuCours = (formData) =>
  API.post("/cours/contenus", formData, { headers: { "Content-Type": "multipart/form-data" } });
