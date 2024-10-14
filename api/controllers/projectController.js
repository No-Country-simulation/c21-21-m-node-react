import projectServices from "../services/projectServices.js";

const create = async (req, res) => {
  const { name, owner, goal_amount, description, deadline, rewards } = req.body;

  if (
    !(
      name &&
      owner &&
      img &&
      category &&
      current_amount &&
      creation_date &&
      goal_amount &&
      description &&
      deadline &&
      rewards
    )
  ) {
    return res.status(400).send({
      errMessage:
        "El nombre, owner, images, meta, descripción y fecha límite son obligatorios.",
    });
  }

  try {
    //llamado al servicio, la respuesta ya se maneja en el callback
    await projectServices.createProject(
      {
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
        backers,
        updates,
      },
      (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(201).send(result);
      }
    );
  } catch (error) {
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
