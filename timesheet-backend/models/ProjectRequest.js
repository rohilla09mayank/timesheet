import mongoose from "mongoose";

const projectRequestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    projectName: { type: String, required: true },
    reason: String,
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const ProjectRequest = mongoose.model("ProjectRequest", projectRequestSchema);
export default ProjectRequest;
