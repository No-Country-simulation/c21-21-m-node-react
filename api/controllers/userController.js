import User from "../models/userModel.js";
import userService from "../services/userServices.js";

export const register = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const userRole = req.body.role ? String(req.body.role) : null

        if (!token) {
            return res
                    .status(403)
                    .send({ message: "No se ha proporcionado un token de autorizacion" });
        }

    //validar el token que obtuvimos de los headers
        const response = await fetch(
            `${process.env.GOOGLE_OAUTH_URL}?access_token=${token}`
        );
        
        const googleUser = await response.json();

        if (!googleUser || !googleUser.email) {
            return res.status(401).send({ message: "Token invalido" });
        }

        let user = await User.findOne({ email: googleUser.email });

        if (user) {
            return res.status(400).send(
                { message: "El usuario ya está registrado con el rol: " + user.role }
            );
        }

        user = new User({
            email: googleUser.email,
            profile_picture: googleUser.picture, 
            projects: [],
            role: userRole
        });

        try {
            await user.save();
        } catch (err) {
            console.log(err)
        }

        return res
                .status(201)
                .send({ message: "Usuario registrado con exito", user: user });
    } catch (error) {
        return res.status(500).send({
            message: "Error al registrar el usuario.",
            details: error.message,
        });
    }
};

const getProfile = async (req, res) => {
  try {
    //ver si el usuario esta disponible en req.user, ya que todo está autenticado por el middleware
    if (!req.user) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }

    const userProfile = await User.findOne({ email: req.user.email });

    return res
      .status(200)
      .send({ message: "Usuario encontrado.", user: userProfile });
  } catch (error) {
    return res.status(500).send({
      message: "Error al obtener el perfil del usuario",
      details: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    /* if (req.user.role !== "administrator") {
            return res
                .status(403)
                .send({ message: "No tienes permiso para ver la lista de usuarios" });
        } */

    const users = await User.find();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({
      message: "Error al obtener la lista de usuarios",
      details: error.message,
    });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { name, profile_picture } = req.body;

    if (!name || !profile_picture) {
      return res.status(400).send({
        message: "Faltan campos obligatorios (nombre o foto de perfil)",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, profile_picture },
      { new: true }
    );

    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(500).send({
      message: "Error al actualizar el perfil",
      details: error.message,
    });
  }
};

export default { getProfile, getUsers, updateUserProfile, register };
