import Project from "../models/projectModel.js";
import User from "../models/userModel.js";

const createProject = async (data, callback) => {
  try {
    const { name, owner, goal_amount, description, deadline, rewards } = data;

    const existingProject = await Project.findOne({ name });
    if (existingProject) return callback({ message: "El proyecto ya existe." });

    const ownerId = await User.findById(owner);
    if (!ownerId) return callback({ message: "El creador/usuario no existe." });

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

//Función que devuelve una lista de proyectos
const getProjects = async () =>{
  try {
    const projects = await Project.find({
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }], //Una vez que todos los documentos tenga 'isDeleted' se puede eliminar la segunda condición
    });
    return projects;
  } catch (error) {
    throw new Error("Error al obtener la lista de proyectos.");  // Lanza el error para manejarlo en el controlador
  }
}

//Función que devuelve un preyecto según el ID
const getProjectByID = async (id)=>{
  try {
    const project = await Project.findOne({ _id: id });
    return project;
  } catch (error) {
    throw new Error("Error al obtener el proyecto por ID.");
  }
}

const updateProject = async (id, updateObj, callback) => {
  try {
    /*
    crear un validator user, para que solo el owner pueda actualizar el proyecto
    */

    const projectUpdate = await Project.findById(id, {
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }]
    });
    if (!projectUpdate)
      return callback({ message: "El proyecto asociado a esa Id, no existe." });

    //actualizar proyecto
    let updatedProject = {
      name: project.name,
      description: project.description,
      goal_amount: project.goal_amount,
      deadline: project.deadline,
      rewards: project.rewards,
    };

    await projectUpdate.updateOne(updatedProject);
    await projectUpdate.save();

    return callback(false, {
      message: "El proyecto se ha acualizado exitosamente!",
    });
  } catch (error) {
    return callback({
      errMessage: "Algo salió mal.",
      details: error.message,
    });
  }
};

//Función que elimina un proyecto de forma lógica según el ID
const deleteProject = async (id) => {
  try {
    
    const deletedProject = await Project.findOneAndUpdate(
      {_id: id},
      {isDeleted: true, deletedAt: new Date()},
      {new: true} //devuelve el documento con los cambios aplicados
    );

    return deletedProject;

  } catch (error) {
    throw new Error("Error al eliminar el proyecto");
  }
}

export default { createProject, getProjects, getProjectByID, updateProject, deleteProject};

