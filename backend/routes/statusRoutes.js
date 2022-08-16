import express from "express";
import { createStatus } from "../controller/StatusController.js";

const router = express.Router();

router.post("/add", createStatus);

export default router;
