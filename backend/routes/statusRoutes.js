import express from "express";
import auth from "../middleware/auth.js";
import { createStatus, getAllStatus } from "../controller/StatusController.js";

const router = express.Router();

router.post("/add", auth, createStatus);
router.get("/all", auth, getAllStatus);

export default router;
