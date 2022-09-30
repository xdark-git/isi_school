import express from "express";
import auth from "../middleware/auth.js";
import { createCours, getOne, getAll } from "../controller/CoursController.js";
import { createNewCoursContenu } from "../controller/ContenusController.js";

const router = express.Router();

router.post("/create", auth, createCours);
router.get("/", auth, getAll);
router.get("/:_id", auth, getOne);

router.post("/contenus", auth, createNewCoursContenu);

export default router;
