import projectController from "../controllers/projectController.js";
import express from "express";
const router = express.Router();

//post
router.post("/create-project", projectController.create);

//update
router.put("/update-project/:id", projectController.update);

export default router;
