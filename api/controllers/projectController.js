import {createProject, getProjects, getProjectByID, updateProjectID} from "../services/projectServices.js";
import User from "../models/userModel.js";

export const create = async (req, res) => {
  const { name, creator, goal_amount, owner } = req.body;
  if (!(name && creator && goal_amount && owner))
    return res.status(400).send({
      errMessage: "El nombre, el creador y la meta, no deben ser nulos.",
    });

  await createProject(req.body, async (err, result) => {
    if (err) return res.status(400).send(err);

    try {
      await User.findByIdAndUpdate(owner, {
        $push: { projects: result._id },
      });
    } catch (updateErr) {
      return res
        .status(400)
        .send({ errMessage: "Error al actualizar el usuario." });
    }

    return res.status(200).send(result);
  });
};

//Cualquier Consulta sobre esta función preguntar a David De Vito
export const getAllProjects = async (req,res) =>{
  try {

    const projects = await getProjects();

    //Si la lista esta vacia se lanza un msm de error
    if(projects.length === 0){
      return res.status(404).send({errMessage: "No se encontraron proyectos."})
    }

    return res.status(200).json(projects);

  } catch (error) {

    return res.status(500).send({
      errMessage: "No se pudo obtener la lista de proyectos.",
      details: error.Message,
    });
    
  }

}

export const getProjectById = async(req, res)=>{
  try {
    const { id } = req.params;
    const project = await getProjectByID(id);

    //Se lanza 404 si el id pasado como parametro tiene 24 caracteres y es erroneo sino pasa 500
    if (!project) {
      return res.status(404).json({
        message: "Proyecto no encontrado.",
      });
    }

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).send({
      errMessage: "No se pudo obtener el proyecto.",
      details: error.Message,
    })
  }

}

export const updateProject = async(req, res)=>{
  try {
    console.log('ok')
  } catch (error) {
    console.log('ñoc')
  }
}

