import { Router } from "express";
import promotionController from "../controllers/promotionController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  isAdmin,
  isProjectOwner,
  canManagePromotion,
} from "../middlewares/permissionsMiddleware.js";

const router = Router();

// Crear una nueva promocion
router.post(
  "/create",
  /* authenticate,
  canManagePromotion, */
  promotionController.createPromotion
);

// Obtener todas las promociones
router.get("/", promotionController.getAllPromotions);

// Obtener una promocion bajo su id
router.get("/:id", promotionController.getPromotionById);

//Actulizar una promocion bajo su id
router.put(
  "/:id",
  /* authenticate,
  canManagePromotion, */
  promotionController.updatePromotionById
);

export default router;
