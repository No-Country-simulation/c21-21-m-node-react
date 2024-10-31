import express from "express";
import { connectDb } from "./config/dataBase.js";
import * as dotenv from "dotenv";
import upload from "./config/multerConfig.js";
import path from "path";

import projectRoute from "./routes/projectRoute.js";
import userRoutes from "./routes/userRoutes.js";
import promotionRoutes from "./routes/promotionRoutes.js";

dotenv.config();

//configuración de express
const app = express();
app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No se subió ninguna imagen." });
  }
  res.send({
    message: "Imagen subida exitosamente",
    filename: req.file.filename,
  });
});

//función asíncrona para levantar el servidor y manejar errores
const startServer = async () => {
  try {
    await connectDb();

    const PORT = process.env.PORT;

    //levantar el servidor
    const server = app.listen(PORT, () => {
      console.log(`✅ El servidor esta corriendo en el puerto: ${PORT}`);
    });

    server.on("error", (err) => {
      console.error("❌ Error al iniciar el servidor:", err.message);
    });
  } catch (error) {
    console.error(
      "💥 Error inesperado al levantar el servidor:",
      error.message
    );
    process.exit(1); //interrumpir proceso si no puede conectarse a la DB
  }
};

//función para iniciar el servidor
startServer();

//routes
app.use("/user", userRoutes);
app.use("/projects", projectRoute);
app.use("/promotion", promotionRoutes);
