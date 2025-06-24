import mongoose from "mongoose";

const timesheetEntrySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    category: { type: String, required: true },
    taskTitle: { type: String, required: true },

    isBillable: { type: Boolean, default: true },
    notes: { type: String },

    entries: [
      {
        date: { type: Date, required: true },
        hours: { type: Number, required: true, min: 0.5 },
      },
    ],

    status: {
      type: String,
      enum: ["submitted", "approved", "rejected"],
      default: "submitted",
    },
  },
  { timestamps: true }
);

const TimesheetEntry = mongoose.model("TimesheetEntry", timesheetEntrySchema);
export default TimesheetEntry;
