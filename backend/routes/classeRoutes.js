import express from "express";
import { createClasse, getAll, getOne } from "../controller/ClasseController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create", auth, createClasse);
router.get("/", auth, getAll);
router.get("/:_id", auth, getOne);

export default router;
