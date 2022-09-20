import express from "express";
import {
  addNewEtudiant,
  addNewProf,
  createClasse,
  getAll,
  getOne,
  deleteClasse,
  updateClasseName,
} from "../controller/ClasseController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/create", auth, createClasse);
router.get("/", auth, getAll);
router.get("/:_id", auth, getOne);
router.put("/updatename/:_id", auth, updateClasseName);
router.put("/addprof/:_id", auth, addNewProf);
router.put("/addetudiant/:_id", auth, addNewEtudiant);
router.delete("/delete/:_id", auth, deleteClasse);

export default router;
