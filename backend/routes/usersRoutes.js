import express from "express";
import {
  getAllUsers,
  signinAdministration,
  signupAdministration,
} from "../controller/AdministationController.js";
import { signinProfesseur, signupProfesseur } from "../controller/ProfesseurController.js";
import { signinEtudiant, signupEtudiant } from "../controller/EtudiantController.js";
import { getUserProfile } from "../controller/assetController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/add/administration", signupAdministration);
router.post("/login/administration", signinAdministration);

router.post("/add/professeur", auth, signupProfesseur);
router.post("/login/professeur", signinProfesseur);

router.post("/add/etudiant", auth, signupEtudiant);
router.post("/login/etudiant", signinEtudiant);

router.get("/all", auth, getAllUsers)
router.get("/img/:imageName", getUserProfile);
export default router;
