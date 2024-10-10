import projectServices from "../services/projectServices.js";

const create = async (req, res) => {
  const { name, owner, goal_amount, description, deadline, rewards } = req.body;

  if (!(name && owner && goal_amount && description && deadline)) {
    return res.status(400).send({
      errMessage:
        "El nombre, owner, meta, descripción y fecha límite son obligatorios.",
    });
  }

  try {
    //llamado al servicio, la respuesta ya se maneja en el callback
    await projectServices.createProject(
      {
        name,
        owner,
        goal_amount,
        description,
        deadline,
        rewards,
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

const update = async (req, res) => {
  const { id } = req.params;
  const updateObj = req.body;

  if (!id) return res.status(400).send({ errMessage: "El Id es obligatorio!" });
  if (!updateObj)
    return res
      .status(400)
      .send({ errMessage: "El objeto de actualización es obligatorio!" });

  try {
    await projectServices.update(
      {
        id,
        updateObj,
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
      errMessage: "Error al actualizar el proyecto.",
      details: error.message,
    });
  }
};

export default { create, getProject, update };
