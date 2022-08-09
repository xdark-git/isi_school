import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const loginEtudiant = () => API.post("/user/login/etudiant");
export const loginProfesseur = () => API.post("/user/login/professeur");
export const loginAdministration = () => API.post("/user/login/administration");
