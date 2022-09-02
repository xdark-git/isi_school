import express from "express";
import { createClasse } from "../controller/ClasseController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create", auth, createClasse);

export default router;
