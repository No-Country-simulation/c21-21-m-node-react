import Project from "../models/projectModel.js";
import User from "../models/userModel.js";

const createProject = async (data, callback) => {
  try {
<<<<<<< HEAD
    const { name, creatorId, goal_amount, description, deadline, rewards } =
      data;

    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return callback({ message: "El proyecto ya existe." });
    }

    const creator = await User.findById(creatorId);
    if (!creator) {
      return callback({ message: "El creador/usuario no existe." });
    }

    //asignar al creador del proyecto
    const newProject = new Project({
      name,
      description,
      creator: {
        name: creator.name,
        email: creator.email,
      },
      goal_amount,
      deadline,
      rewards,
    });
=======
    const project = await Project.findOne({ name: req.name });
    if (project) return callback({ message: "El proyecto ya existe." });
>>>>>>> b39d8c077330a11c4aacb0949a92a8929a8a5562

    const savedProject = await newProject.save();

    return callback(false, savedProject);
  } catch (error) {
    return callback({
      errMessage: "Algo salió mal.",
      details: error.message,
    });
  }
};

export default { createProject };
