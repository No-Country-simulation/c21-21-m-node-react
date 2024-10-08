import express from "express";
import { connectDb } from "./config/dataBase.js";
import * as dotenv from "dotenv";

import projectRoute from "./routes/projectRoute.js";

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

//rutas
app.use(projectRoute);
