import express from "express";
import {
  createAdmin,
  getCreateAdminPage,
} from "../controller/UsersController.js";

const router = express.Router();

router.get("/admin", getCreateAdminPage);
router.post("/admin", createAdmin);
export default router;
