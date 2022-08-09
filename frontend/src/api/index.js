import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const signEtudiant = (formData) => API.post("/user/login/etudiant", formData);
export const loginProfesseur = (formData) => API.post("/user/login/professeur", formData);
export const loginAdministration = (formData) => API.post("/user/login/administration", formData);
