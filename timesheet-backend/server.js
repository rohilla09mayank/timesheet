import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({ path: "./.env" });

import connectDB from "./config/db.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import timesheetRoutes from "./routes/timesheetRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(notFound);
app.use(errorHandler);

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/timesheets", timesheetRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
