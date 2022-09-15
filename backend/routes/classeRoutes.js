import express from "express";
import { addNewProf, createClasse, getAll, getOne } from "../controller/ClasseController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create", auth, createClasse);
router.get("/", auth, getAll);
router.get("/:_id", auth, getOne);
router.put("/addprof/:_id", auth, addNewProf);

export default router;
