import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
  getUserById,
} from "../controllers/userController.js";

const router = express.Router();

//TODOS LOS USERS
router.get("/", getUsers);

//OBTENER USER BY ID
router.get("/:id", getUserById);

//CREAR USER
router.post("/create", createUser);

//BORRAR USER
router.delete("/:id", deleteUser);
export default router;
