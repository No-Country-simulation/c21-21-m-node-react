import projectController from "../controllers/projectController.js";
import express from "express";
const router = express.Router();

//post
router.post("/create-project", projectController.create);

export default router;
