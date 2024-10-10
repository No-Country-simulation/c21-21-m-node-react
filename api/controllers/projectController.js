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
};

export default create;
