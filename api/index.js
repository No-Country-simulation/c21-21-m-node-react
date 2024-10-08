import express from "express";
import { connectDb } from "./config/dataBase.js";
import * as dotenv from "dotenv";

import Project from "./models/projectModel.js";
import User from "./models/userModel.js";

const PORT = 3000;
dotenv.config();

//express config
const app = express();
app.use(express.json());

//llamado a la DB
connectDb();

//levantar el server
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

//rutas de prueba (a eliminar)
app.post("/create-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el proyecto", error });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
});
