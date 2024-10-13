import Reward from "../models/rewardModel.js";
import Project from "../models/projectModel.js";

const createReward = async (data, callback) => {
  try {
    const { name, description, category, amount, img, project } = data;

    const existingReward = await Reward.findOne({ name });
    if (existingReward) return callback({ message: "La recompensa ya existe" });

    const projectId = await Project.findById(project);
    if (!projectId) return callback({ message: "Este proyecto no existe" });

    //crea la recompensa
    const newReward = new Reward({
      name,
      description,
      category,
      amount,
      img,
      project,
    });

    const savedReward = await newReward.save();

    return callback(false, savedReward);
  } catch (error) {
    return callback({
      errMessage: "Algo fallo al crear la recompensa.",
      details: error.message,
    });
  }
};

// DEBERIA TRAER TODAS LAS RECOMPENSAS?? lAS FILTRO POR ID DEL PROYECTO??
const getRewards = async (project, callback) => {
  try {
    const rewards = await Reward.find({ project: project });
    if(!rewards) return callback({message: "No se han podido encontrar las recompensas para este proyecto"})
    return rewards
  } catch (error) {
    return callback({
      errMessage: "A ocurrido un error al obtener las recompensas",
      details: error.message,
    });
  }
};

const updateReward = async (id, updateData, callback) => {
  try {
    const reward = await Reward.findById(id);
    if (!reward) return callback({ message: "La recompensa no existe" });

    let updatedReward = {
      name: updateData.name,
      description: updateData.description,
      category: updateData.category,
      amount: updateData.amount,
      img: updateData.img,
    };

    await reward.updateOne(updatedReward);
    await reward.save();

    return callback(false, {
      message: "Los cambios se han guardado con exito",
    });
  } catch (error) {
    return callback({
      errMessage: "Hubo un error al guardar los cambios",
      details: error.message,
    });
  }
};

export default { createReward, getRewards, updateReward };
