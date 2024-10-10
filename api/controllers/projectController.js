import projectServices from "../services/projectServices.js";

const create = async (req, res) => {
  const { name, creator, goal_amount, description, deadline, rewards } =
    req.body;

  if (!(name && creator && goal_amount && description && deadline)) {
    return res.status(400).send({
      errMessage:
        "El nombre, creador, meta, descripción y fecha límite son obligatorios.",
    });
  }

  try {
    const result = await projectServices.createProject({
      name,
      creator,
      goal_amount,
      description,
      deadline,
      rewards,
    });
    return res.status(201).send(result);
  } catch (error) {
    return res.status(500).send({
      errMessage: "Error al crear el proyecto.",
      details: error.message,
    });
  }
};

export default { create };
