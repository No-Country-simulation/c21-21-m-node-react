import express from "express";
import { connectDb } from "./config/dataBase.js";
import * as dotenv from "dotenv";
import projectRoute from "./routes/projectRoute.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = 3000;
dotenv.config();

//configuración de express
const app = express();
app.use(express.json());

//función asíncrona para levantar el servidor y manejar errores
const startServer = async () => {
  try {
    await connectDb();

    const PORT = process.env.PORT || 3000;

    //levantar el servidor
    const server = app.listen(PORT, () => {
      console.log(`El servidor esta corriendo en el puerto ${PORT}`);
    });

    server.on("error", (err) => {
      console.error("Error al iniciar el servidor:", err.message);
    });
  } catch (error) {
    console.error("Error al levantar el servidor:", error.message);
    process.exit(1); //interrumpir proceso si no puede conectarse a la DB
  }
};

//función para iniciar el servidor
startServer();

//routes
app.use("/users", userRoutes);
app.use("/projects", projectRoute);
