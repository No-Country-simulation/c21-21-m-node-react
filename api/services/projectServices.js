import Project from "../models/projectModel.js";
import User from "../models/userModel.js";

const createProject = async (data) => {
  try {
    const {
      owner, //usuario autenticado
      name,
      img,
      description,
      goal_amount,
      deadline,
      category,
      status,
      bankDetails,
      creation_date,
    } = data;

    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      throw new Error("El nombre del proyecto ya existe en la base de datos.");
    }

    //buscar usuario por su id y obtener name y email
    const ownerData = await User.findById(owner, "name email");
    console.log(ownerData)
    if (!ownerData) {
      throw new Error("El creador/usuario no existe.");
    }

    //crear el proyecto con el owner
    const newProject = new Project({
      owner: {
        id: ownerData._id,
        name: ownerData.name,
        email: ownerData.email,
      },
      name,
      img,
      description,
      goal_amount,
      deadline,
      category,
      status,
      bankDetails,
      creation_date,
    });

    const savedProject = await newProject.save();

    //actualizar el usuario de DB para agregar el projecto
    await User.findByIdAndUpdate(owner, {
      $push: { projects: { _id: savedProject._id, name: savedProject.name } }, //tambien se puede agregar el nombre del proyecto
    });

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
const getProjectByID = async (id) => {
  try {
    const project = await Project.findOne({ _id: id });
    return project;
  } catch (error) {
    throw new Error("Error al obtener el proyecto por ID.");
  }
};

const updateProject = async (id, updateObj, callback) => {
  try {
    // Encontrar el proyecto y validar que no esté eliminado
    const projectUpdate = await Project.findOne({
      _id: id,
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }],
    });

    if (!projectUpdate) {
      return callback({
        message: "El proyecto asociado a esa ID no existe o ha sido eliminado.",
      });
    }

    // Preparar los datos de actualización
    const updatedProject = {
      name: updateObj.name || projectUpdate.name,
      description: updateObj.description || projectUpdate.description,
      goal_amount: updateObj.goal_amount || projectUpdate.goal_amount,
      deadline: updateObj.deadline || projectUpdate.deadline,
      category: updateObj.category || projectUpdate.category,
      status: updateObj.status || projectUpdate.status,
      creation_date: projectUpdate.creation_date,
      rewards: updateObj.rewards || projectUpdate.rewards,
      img: updateObj.img ? updateObj.img : projectUpdate.img,
      bankDetails: {
        accountHolder:
          updateObj.bankDetails?.accountHolder ||
          projectUpdate.bankDetails.accountHolder,
        accountNumber:
          updateObj.bankDetails?.accountNumber ||
          projectUpdate.bankDetails.accountNumber,
        bankName:
          updateObj.bankDetails?.bankName || projectUpdate.bankDetails.bankName,
        swiftCode:
          updateObj.bankDetails?.swiftCode ||
          projectUpdate.bankDetails.swiftCode,
      },
    };

    // Actualizar el proyecto
    const updatedProjectResult = await Project.findByIdAndUpdate(
      id,
      updatedProject,
      { new: true }
    );

    if (!updatedProjectResult) {
      return callback({
        message: "Error al actualizar el proyecto, verifique los datos.",
      });
    }

    return callback(null, {
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
      { _id: id },
      { isDeleted: true, deletedAt: new Date() },
      { new: true } //devuelve el documento con los cambios aplicados
    );

    return deletedProject;
  } catch (error) {
    throw new Error("Error al eliminar el proyecto");
  }
};

export default {
  createProject,
  getProjects,
  getProjectByID,
  updateProject,
  deleteProject,
};
