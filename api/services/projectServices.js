import Project from "../models/projectModel.js";
import User from "../models/userModel.js";

const createProject = async (data, callback) => {
  try {
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
