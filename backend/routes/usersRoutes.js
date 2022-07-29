import express from "express";
import {
  createAdministration,
  loginAdministration,
} from "../controller/AdministationController.js";
import {
  createProfesseur,
  loginProfesseur,
} from "../controller/ProfesseurController.js";
import {
  createEtudiant,
  loginEtudiant,
} from "../controller/EtudiantController.js";

const router = express.Router();

router.post("/add/administration", createAdministration);
router.post("/login/professeur", loginAdministration);

router.post("/add/professeur", createProfesseur);
router.post("/login/professeur", loginProfesseur);

router.post("/add/etudiant", createEtudiant);
router.post("/login/etudiant", loginEtudiant);

export default router;
