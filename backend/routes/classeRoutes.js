import express from "express";
import { createClasse, getAll } from "../controller/ClasseController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create", auth, createClasse);
router.get("/", auth, getAll)

export default router;
