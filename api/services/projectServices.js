import Project from "../models/projectModel.js";

const createProject = async (req, callback) => {
  try {
    const project = await Project.findOne({ $where: req.name });
    if (project) return callback({ message: "El proyecto ya existe." });

    const newProject = new Project(req);
    const savedProject = await newProject.save();

    return callback(false, savedProject);
  } catch (error) {
    return callback({
      errMessage: "Algo salió mal.",
      details: error.message,
    });
  }
};

export default createProject;
