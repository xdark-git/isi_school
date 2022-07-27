import express from "express";
import { createAdmin, createProfesseur, createEtudiant } from "../controller/UsersController.js";

const router = express.Router();

router.post("/administration", createAdmin);
router.post("/professeur", createProfesseur);
router.post("/etudiant", createEtudiant);

export default router;
