import express from "express";
import { createAdmin } from "../controller/AdministationController.js";
import { createProfesseur } from "../controller/ProfesseurController.js";
import { createEtudiant } from "../controller/EtudiantController.js";

const router = express.Router();

router.post("/add/administration", createAdmin);
router.post("/add/professeur", createProfesseur);
router.post("/add/etudiant", createEtudiant);

export default router;
