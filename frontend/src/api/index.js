import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile").token)}`;
  }
  return req;
});

export const signEtudiant = (formData) => API.post("/user/login/etudiant", formData);
export const loginProfesseur = (formData) => API.post("/user/login/professeur", formData);
export const loginAdministration = (formData) => API.post("/user/login/administration", formData);
