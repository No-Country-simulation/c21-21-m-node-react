import User from "../models/userModel.js";

export const authenticate = async (req, res, next) => {
  try {
    //otener el token de los headers de la request
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(403)
        .send({ message: "No se ha proporcionado un token de autorizacion" });
    }

    //validar el token que obtuvimos de los headers, haciendo una solicitud a la API de google
    const response = await fetch(
      `${process.env.GOOGLE_OAUTH_URL}?access_token=${token}` //en el .env
    );
    const googleUser = await response.json();

    if (!googleUser || !googleUser.email) {
      return res.status(401).send({ message: "Token inválido." });
    }

    let user = await User.findOne({ email: googleUser.email });

    if (!user) {
      return res.status(404).send({
        message: "El usuario no está registrado. Debe registrarse primero.",
      });
    }

    //guardar la info del usuario a la request y next()
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Ha ocurrido un error interno del server!",
      details: error,
    });
  }
};
