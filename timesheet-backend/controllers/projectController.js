import Project from "../models/Project.js";
import ProjectRequest from "../models/ProjectRequest.js";

export const getUserProjects = async (req, res) => {
  const userId = req.user._id;
  const projects = await Project.find({ "members.user": userId });
  res.json(projects);
};

export const requestProjectAccess = async (req, res) => {
  const { projectName, reason } = req.body;
  const request = await ProjectRequest.create({
    user: req.user._id,
    projectName,
    reason,
  });
  res.status(201).json(request);
};
