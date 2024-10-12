import Project from "../models/projectModel.js";
import User from "../models/userModel.js";

const createProject = async (data, callback) => {
  try {
    const {
      name,
      description,
      category,
      img,
      goal_amount,
      current_amount,
      creation_date,
      deadline,
      rewards,
      owner,
    } = data;

    const existingProject = await Project.findOne({ name });
    if (existingProject) return callback({ message: "El proyecto ya existe." });

    const ownerId = await User.findById(owner);
    if (!ownerId) return callback({ message: "El creador/usuario no existe." });

    //crear proyecto
    const newProject = new Project({
      name,
      description,
      category,
      img, //UN ARRAY CON LOS ID DE LAS IMAGENES
      goal_amount,
      current_amount,
      creation_date,
      deadline,
      rewards, //UN ARRAY CON LOS ID DE LOS REWARDS
      owner, //SOLO EL ID DEL OWNER
      backers,
      updates,
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

//Función que devuelve una lista de proyectos
const getProjects = async () => {
  try {
    const projects = await Project.find();
    return projects;
  } catch (error) {
    throw new Error("Error al obtener la lista de proyectos."); // Lanza el error para manejarlo en el controlador
  }
};

//Función que devuelve un preyecto según el ID
export const getProjectByID = async (id) => {
  try {
    const project = await Project.findOne({ _id: id });
    return project;
  } catch (error) {
    throw new Error("Error al obtener el proyecto por ID.");
  }
};

const updateProject = async (id, updateObj, callback) => {
  try {
    const project = await Project.findById(id);
    if (!project) {
      return callback({ message: "El proyecto asociado a esa Id, no existe." });
    }

    //actualiza SOLO los campos que han sido enviados en el updateObj
    const updatedProject = {
      name: updateObj.name || project.name,
      description: updateObj.description || project.description,
      goal_amount: updateObj.goal_amount || project.goal_amount,
      deadline: updateObj.deadline || project.deadline,
      category: updateObj.category || project.category,
      creation_date: project.creation_date,
      rewards: updateObj.rewards || project.rewards,
    };

    //actualizar protyecto
    await Project.updateOne({ _id: id }, updatedProject);

    return callback(false, {
      message: "El proyecto se ha actualizado exitosamente!",
      project,
    });
  } catch (error) {
    return callback({
      errMessage: "Algo salió mal.",
      details: error.message,
    });
  }
};

export default { createProject, updateProject, getProjects, getProjectByID };
