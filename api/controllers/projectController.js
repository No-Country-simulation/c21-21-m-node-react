<<<<<<< HEAD
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
=======
import createProject from "../services/projectServices.js";
import User from "../models/userModel.js";

const create = async (req, res) => {
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
>>>>>>> b39d8c077330a11c4aacb0949a92a8929a8a5562
};

export default { create };
