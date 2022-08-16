import express from "express";
import {
  signinAdministration,
  signupAdministration,
} from "../controller/AdministationController.js";
import { signinProfesseur, signupProfesseur } from "../controller/ProfesseurController.js";
import { signinEtudiant, signupEtudiant } from "../controller/EtudiantController.js";

const router = express.Router();

router.post("/add/administration", signupAdministration);
router.post("/login/administration", signinAdministration);

router.post("/add/professeur", signupProfesseur);
router.post("/login/professeur", signinProfesseur);

router.post("/add/etudiant", signupEtudiant);
router.post("/login/etudiant", signinEtudiant);

export default router;
