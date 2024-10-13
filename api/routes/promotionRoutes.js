import { Router } from 'express'
import promotionController from '../controllers/promotionController.js';

const router = Router();

// Crear una nueva promocion
router.post("/create", promotionController.createPromotion)

// Obtener todas las promociones
router.get("/", promotionController.getAllPromotions)

// Obtener una promocion bajo su id
router.get("/:id", promotionController.getPromotionById)

//Actulizar una promocion bajo su id
router.put("/:id", promotionController.updatePromotionById)


export default router;