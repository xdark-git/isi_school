import express from "express";
import {
  createAdmin,
  createProfesseur,
  createEtudiant,
} from "../controller/UsersController.js";

const router = express.Router();

router.post("/add/administration", createAdmin);
router.post("/add/professeur", createProfesseur);
router.post("/add/etudiant", createEtudiant);

export default router;
