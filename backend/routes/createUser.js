import express from "express";
import {
  createAdmin,
  getCreateAdminPage,
} from "../controller/UsersController.js";

const router = express.Router();

router.post("/admin", createAdmin);
router.get("/admin", getCreateAdminPage);
export default router;
