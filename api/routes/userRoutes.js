import express from "express";
import userController from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  isAdmin,
  isProjectOwner,
  canManagePromotion,
} from "../middlewares/permissionsMiddleware.js";

const router = express.Router();

//post
router.post("/auth/register", userController.register);

//get
router.get("/profile", authenticate, userController.getProfile);
router.get("/allUsers", authenticate, /* isAdmin, */ userController.getUsers);

//put
router.put("/updateProfile", authenticate, userController.updateUserProfile);

/* 
FUTURAS RUTAS PARA BANEAR Y HACER ADMIN

router.patch('/ban/:userId', authenticate, isAdmin, banUser); // Solo el admin puede banear usuarios
router.patch('/make-admin/:userId', authenticate, isAdmin, makeAdmin); // Solo el admin puede asignar el rol de admin
 */
export default router;
