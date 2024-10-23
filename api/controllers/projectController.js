import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';
import projectServices from "../services/projectServices.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async (req, res) => {
  console.log(req.body)
  let img = null;
  try {
    const {
      owner,
      name,
      description,
      goal_amount,
      deadline, 
      category,
      status,
      bankDetails,
    } = req.body;

    if (!(name && owner && category && goal_amount && description)) {
      return res.status(400).send({
        errMessage: "El nombre, owner, meta, descripción y fecha límite son obligatorios.",
      });
    }

    const parsedGoalAmount = parseFloat(goal_amount);

    if(isNaN(parsedGoalAmount)) {
      return res.status(400).send({
        errMessage: "El campo 'meta' debe ser un número válido.",
      });
    }

    let parsedDeadline = null;
    if(deadline) {
      parsedDeadline = new Date(deadline);
      if(isNaN(parsedDeadline.getTime())) {
        return res.status(400).json({ error: "Fecha de vencimiento no válida." });
      }
    }

    img = req.file ? req.file.filename : null;

    await projectServices.createProject({
      owner, 
      name,
      img,
      description,
      goal_amount: parsedGoalAmount,
      deadline: parsedDeadline,
      category,
      status,
      bankDetails,
      creation_date: new Date()
    });

    res.status(201).send({ message: "Proyecto creado exitosamente" });
    console.log(res)
  } catch (error) {
    console.log(error)
    if (img) {
      const imgPath = path.join(__dirname, '../uploads/', img);
      fs.unlink(imgPath, (err) => {
          if (err) {
              console.error('Error al eliminar la imagen:', err);
          } else {
              console.log('Imagen eliminada exitosamente:', img);
          }
      });
    }
    return res.status(500).send({
      errMessage: "Error al crear el proyecto.",
      details: error.message,
    });
  }
};

//Cualquier Consulta sobre esta función preguntar a David De Vito
const getAllProjects = async (req, res) => {
  try {
    const projects = await projectServices.getProjects();

    //Si la lista esta vacia se lanza un msm de error
    if (projects.length === 0) {
      return res
        .status(404)
        .send({ errMessage: "No se encontraron proyectos." });
    }

    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).send({
      errMessage: "No se pudo obtener la lista de proyectos.",
      details: error.Message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectServices.getProjectByID(id);
    
    //Se lanza 410 si el proyecto ya ha sido lógicamente eliminado del servidor
    if(project.isDeleted === true){
      return res.status(410).json({
        message: "Este proyecto ha sido eliminado."
      })
    }

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
    });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const updateObj = req.body;

  if (!id) return res.status(400).send({ errMessage: "El Id es obligatorio!" });
  if (!updateObj)
    return res
      .status(400)
      .send({ errMessage: "El objeto de actualización es obligatorio!" });

  try {
    await projectServices.updateProject(id, updateObj, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(201).send(result);
    });
  } catch (error) {
    return res.status(500).send({
      errMessage: "Error al actualizar el proyecto.",
      details: error.message,
    });
  }
};

const deleteProjectById = async (req, res) =>{
  try {
  
    const {id} = req.params;

    const project = await projectServices.deleteProject(id);

    if(!project){
      return res.status(404).json({
        message: "Proyecto no encorntrado."
      })
    }

    //Se lanza 410 si el proyecto ya ha sido lógicamente eliminado del servidor
    if(project.isDeleted === true){
      return res.status(410).json({
        message: "Este proyecto ya ha sido eliminado."
      })
    }

    return res.status(200).json({
      message: "Proyecto eliminado (lógicamente).",
      project
    });

  } catch (error) {
    return res.status(500).send({
      errMessage: "No se pudo eliminar el proyecto",
      details: error.message
    })
  }
}

export default { create, getAllProjects, getProjectById, update, deleteProjectById };
