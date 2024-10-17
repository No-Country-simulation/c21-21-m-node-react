import User from "../models/userModel.js";

export const authenticate = async (req, res, next) => {
  try {
    //otener el token de los headers de la request
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(403)
        .send({ message: "No se ha proporcionado un token de autorización" });
    }

    try {
      //validar el token que obtuvimos de los headers, haciendo una solicitud a la API de google
      const response = await fetch(
        `${process.env.GOOGLE_OAUTH_URL}?access_token=${token}` //en el .env
      );

      if (!response.ok) {
        return res
          .status(401)
          .send({ message: "Error al validar el token con Google OAuth" });
      }

      const googleUser = await response.json();

      if (!googleUser || !googleUser.email) {
        return res.status(401).send({ message: "Token inválido." });
      }

      //ver si el user ya está en la DB
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
      //manejo de error de connection con gosgle
      return res.status(500).send({
        message: "Error al comunicarse con Google OAuth",
        details: error.message,
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Ha ocurrido un error interno del servidor",
      details: error.message,
    });
  }
};
