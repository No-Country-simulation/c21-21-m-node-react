import Project from "../models/projectModel.js";
//import User from "../models/userModel.js";

//middleware para verificar si el usuario es administrador
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "administrator") {
    return res
      .status(403)
      .json({ message: "No tienes permisos de administrador." });
  }
  next();
};

//middleware para verificar si el usuario es owner del proyecto
export const isProjectOwner = async (req, res, next) => {
  try {
    console.log(req)
    const projectId = req.params.projectId || req.body.projectId;
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Proyecto no encontrado." });
    }

    //verificacion. _id deveria provenir del authMiddleware
    if (project.owner.id.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "No tienes permisos para modificar este proyecto." });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error de permisos al verificar el propietario del proyecto.",
    });
  }
};

//middleware para verificar permisos en las promociones del proyecto
export const canManagePromotion = async (req, res, next) => {
  try {
    const projectId = req.params.projectId || req.body.projectId;
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Proyecto no encontrado." });
    }

    //verificacion de permisos para propietarios y administradores
    if (
      project.owner.id.toString() !== req.user._id.toString() &&
      req.user.role !== "administrator"
    ) {
      return res
        .status(403)
        .json({ message: "No tienes permisos para gestionar esta promoción." });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al verificar permisos de la promoción." });
  }
};
