import { get } from "mongoose";
import rewardService from "../services/rewardServices";

const create = async (req, res) => {
  const projectId = req.params.id;
  const { name, description, category, amount, img } = req.body;

  if (!(name && description && category && amount)) {
    return res.status(400).send({
      errMessage:
        "Los siguiente campos son obligatorios: name, description, category, amount, project",
    });
  }

  try {
    await rewardService.createReward(
      {
        name,
        description,
        category,
        amount,
        img,
        projectId,
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
      errMessage: "Hubo un error al crear la recompensa",
      details: error.message,
    });
  }
};

// DEBERIA TRAER TODAS LAS RECOMPENSAS?? lAS FILTRO POR ID DEL PROYECTO??
const getRewardsByProject = async (req, res) => {
  const projectId = req.params.id;
  try {
    const rewards = await rewardService.getRewards(projectId, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(201).send(result);
    });
  } catch (error) {
    return res.status(500).send({
      errMessage: "Ha ocurrido un error al busca las recompensas",
      details: error.message,
    });
  }
};

const update = async (req, res) => {
  const { reward_id } = req.params;
  const updateData = req.body;

  if (!reward_id)
    return res.status(400).send({ errMessage: "Reward not found" });
  if (!updateData) {
    return res.status(400).send({ errMessage: "Complete al menos un campo" });
  }

  try {
    await rewardService.update({ id, updateData }, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(201).send(result);
    });
  } catch (error) {
    return res.status(500).send({
      errMessage: "A ocurrido un error al actualizar la recompenza.",
      details: error.message,
    });
  }
};

export default { create, getRewardsByProject, update };
