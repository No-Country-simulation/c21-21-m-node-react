import User from "../models/userModel.js";

const registerUser = async (googleUser, userRole, callback) => {
  try {
    //verificar si el usuario ya existe
    let user = await User.findOne({ email: googleUser.email });

    if (user) {
      return callback({
        error: true,
        message: `El usuario ya está registrado con el rol: ${user.role}`,
      });
    }

    //crear nuevo usuario en la DB
    const newUser = new User({
      name: googleUser.name,
      email: googleUser.email,
      profile_picture: googleUser.picture,
      role: userRole,
      projects: [],
    });

    const savedUser = await newUser.save();

    //devuelve el usuario guardado en DB
    return callback(null, savedUser);
  } catch (error) {
    return callback({
      error: true,
      message: "Error al interactuar con la base de datos.",
      details: error,
    });
  }
};

export default { registerUser };
