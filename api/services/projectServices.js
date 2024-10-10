import Project from "../models/projectModel.js";
import User from "../models/userModel.js";

const createProject = async (data, callback) => {
  try {
    const { name, owner, goal_amount, description, deadline, rewards } = data;

    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return callback({ message: "El proyecto ya existe." });
    }

    const ownerId = await User.findById(owner);
    if (!ownerId) {
      return callback({ message: "El creador/usuario no existe." });
    }

    //crear proyecto
    const newProject = new Project({
      name,
      description,
      owner, //solo el ID del owner (a cabmiar dependiendo del front y auth0)
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
