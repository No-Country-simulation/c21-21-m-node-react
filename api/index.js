import express from "express";
import { connectDb } from "./config/dataBase.js";
import * as dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

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

//routes
app.use("/users", userRoutes);
