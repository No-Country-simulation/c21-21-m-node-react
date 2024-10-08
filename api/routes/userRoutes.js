import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

//TODOS LOS USERS
router.get("/", getUsers);

//CREAR USER
router.post("/create", createUser);

//BORRAR USER
router.delete("/:id", deleteUser);
export default router;
