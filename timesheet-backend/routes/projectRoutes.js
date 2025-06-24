import express from "express";
import {
  getUserProjects,
  requestProjectAccess,
} from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/my-projects", protect, getUserProjects);
router.post("/request-access", protect, requestProjectAccess);

export default router;
