import Timesheet from "../models/Timesheet.js";

export const addTimesheetEntry = async (req, res) => {
  const { project, category, taskTitle, isBillable, notes, entries } = req.body;

  const newEntry = await Timesheet.create({
    user: req.user._id,
    project,
    category,
    taskTitle,
    isBillable,
    notes,
    entries,
  });

  res.status(201).json(newEntry);
};

export const getMyTimesheets = async (req, res) => {
  const userId = req.user._id;
  const { startDate, endDate } = req.query;

  const filter = { user: userId };
  if (startDate && endDate) {
    filter["entries.date"] = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  const timesheets = await Timesheet.find(filter).populate(
    "project",
    "name category color"
  );
  res.json(timesheets);
};

export const getWeeklySummary = async (req, res) => {
  const userId = req.user._id;
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res
      .status(400)
      .json({ message: "Start and end date are required." });
  }

  const timesheets = await Timesheet.find({
    user: userId,
    "entries.date": { $gte: new Date(startDate), $lte: new Date(endDate) },
  });

  let totalHours = 0;
  let billableHours = 0;
  const projectHours = {};

  timesheets.forEach((entry) => {
    entry.entries.forEach((e) => {
      if (e.date >= new Date(startDate) && e.date <= new Date(endDate)) {
        totalHours += e.hours;
        if (entry.isBillable) billableHours += e.hours;

        const key = entry.project.toString();
        projectHours[key] = (projectHours[key] || 0) + e.hours;
      }
    });
  });

  res.json({
    totalHours,
    billableHours,
    nonBillableHours: totalHours - billableHours,
    projectHours,
  });
};

export const getDailyActivity = async (req, res) => {
  const userId = req.user._id;
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res
      .status(400)
      .json({ message: "Start and end date are required." });
  }

  const timesheets = await Timesheet.find({
    user: userId,
    "entries.date": {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    },
  });

  const activityMap = {};

  timesheets.forEach((entry) => {
    entry.entries.forEach(({ date, hours }) => {
      const day = new Date(date).toISOString().split("T")[0];
      activityMap[day] = (activityMap[day] || 0) + hours;
    });
  });

  res.json(activityMap);
};
