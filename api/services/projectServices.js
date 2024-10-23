import Project from "../models/projectModel.js";
import User from "../models/userModel.js";

const createProject = async (data) => {
  console.log(data);
  try {
    const {
      owner, 
      name,
      img,
      description,
      goal_amount,
      deadline,
      category,
      status,
      bankDetails,
      creation_date 
    } = data;

    const ownerId = await User.findById(owner);
    if (!ownerId) {
      throw new Error("El creador/usuario no existe."); e
    }

    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      throw new Error("El proyecto ya existe."); 
    }

    const newProject = new Project({
      owner: ownerId,
      name,
      img,
      description,
      goal_amount,
      deadline,
      category,
      status,
      bankDetails,
      creation_date 
    });

    const savedProject = await newProject.save();

    return savedProject; 
  } catch (error) {
    console.error("Error al guardar el proyecto:", error);
    throw new Error("Algo salió mal: " + error.message); 
  }
};

//Función que devuelve una lista de proyectos
const getProjects = async () => {
  try {
    const projects = await Project.find({
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }], //Una vez que todos los documentos tenga 'isDeleted' se puede eliminar la segunda condición
    });
    return projects;
  } catch (error) {
    throw new Error("Error al obtener la lista de proyectos."); // Lanza el error para manejarlo en el controlador
  }
};

//Función que devuelve un preyecto según el ID
const getProjectByID = async (id)=>{
  try {
    const project = await Project.findOne({ _id: id });
    return project;
  } catch (error) {
    throw new Error("Error al obtener el proyecto por ID.");
  }
};

const updateProject = async (id, updateObj, callback) => {
  try {
    /*
    Crear un validador user, para que solo el owner pueda actualizar el proyecto
    */

    const projectUpdate = await Project.findOne({
      _id: id,
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }],
    });

    if (!projectUpdate) {
      return callback({
        message: "El proyecto asociado a esa ID no existe o ha sido eliminado.",
      });
    }

    // Actualiza solo los campos que han sido enviados en updateObj
    const updatedProject = {
      name: updateObj.name || projectUpdate.name,
      description: updateObj.description || projectUpdate.description,
      goal_amount: updateObj.goal_amount || projectUpdate.goal_amount,
      deadline: updateObj.deadline || projectUpdate.deadline,
      category: updateObj.category || projectUpdate.category,
      creation_date: projectUpdate.creation_date, // Mantener la fecha de creación original
      rewards: updateObj.rewards || projectUpdate.rewards,
    };

    // Actualizar el proyecto
    const updatedProjectResult = await Project.findByIdAndUpdate(id, updatedProject, { new: true });

    return callback(false, {
      message: "El proyecto se ha actualizado exitosamente!",
      project: updatedProjectResult,
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

