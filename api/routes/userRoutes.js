import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

//TODOS LOS USERS
router.get("/", getUsers);

//CREAR USER
router.post("/create", createUser);

export default router;
