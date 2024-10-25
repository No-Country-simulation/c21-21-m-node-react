import express from "express";
import userController from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

//post
router.post("/auth/register", userController.register);

//get
router.get("/profile", authenticate, userController.getProfile);
router.get("/allUsers", userController.getUsers);

//put
router.put(
  "/updateProfile",
  authenticate,  userController.updateUserProfile
);

//delete (ojo que este es un borrado logico, nada debe ser borrado de la DB)

export default router;
