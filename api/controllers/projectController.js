import createProject from "../services/projectServices.js";

const create = async (req, res) => {
  const { name, creator, goal_amount } = req.body;
  if (!(name && creator && goal_amount))
    return res.status(400).sen({
      errMessage: "El nombre, el creador y la meta, no deben ser nulos.",
    });

  await createProject(req.body, (err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(result);
  });
};

export default create;
