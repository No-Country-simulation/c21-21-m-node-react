import Project from "../models/projectModel.js";

export const createProject = async (req, callback) => {
  try {
    const project = await Project.findOne({ name: req.name });
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

//Función que devuelve una lista de proyectos
export const getProjects = async () =>{
  try {
    const projects = await Project.find()
    return projects;
  } catch (error) {
    throw new Error("Error al obtener la lista de proyectos.");  // Lanza el error para manejarlo en el controlador
  }
}

//Función que devuelve un preyecto según el ID
export const getProjectByID = async (id)=>{
  try {
    const project = await Project.findOne({ _id: id });
    return project;
  } catch (error) {
    throw new Error("Error al obtener el proyecto por ID.");
  }
}

export const updateProjectID = async(id) =>{
  try {
    
  } catch (error) {
    throw new Error("Error al actualizar el proyecto por ID.");
  }
}

