import express from "express";
import { connectDb } from "./config/dataBase.js";
import * as dotenv from "dotenv";

const PORT = 3000;
dotenv.config();

//configuracion de express
const app = express();
app.use(express.json());

//llamado a la Db
connectDb();

//levantar el servidor (futuramente conexion con mongoDB)
app.listen(PORT, () => {
  console.log(`The server is running in ${PORT}`);
});
