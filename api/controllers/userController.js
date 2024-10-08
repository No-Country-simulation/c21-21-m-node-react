import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "El User ya existe" });
    }

    const nuevoUser = new User({ name, email, password });

    await nuevoUser.save();

    return res.status(201).json({ message: "User creado", user: nuevoUser });
  } catch (e) {
    return res.status(500).json({ message: "Error al crear usuario", e });
  }
};

export const getUsers = async (req, res) => {
  try {
    const usuarios = await User.find();
    return res.status(200).json(usuarios);
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error al obtener los usuarios", e });
  }
};
