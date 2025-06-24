import express from "express";
import {
  addTimesheetEntry,
  getMyTimesheets,
  getWeeklySummary,
  getDailyActivity,
} from "../controllers/timesheetController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addTimesheetEntry);
router.get("/", protect, getMyTimesheets);
router.get("/summary", protect, getWeeklySummary);
router.get("/activity", protect, getDailyActivity);

export default router;
