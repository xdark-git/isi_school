import axios from "axios";

const url = "http://localhost:5000/api/user/login/etudiant";

const loginEtudiant = () => axios.post(url);
