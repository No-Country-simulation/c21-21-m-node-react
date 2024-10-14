import projectController from "../controllers/projectController.js";
import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

//post
router.post("/createProject", projectController.create);

//get
router.get("/getProjects", projectController.getAllProjects);
router.get("/getProject/:id", projectController.getProjectById);

//update
router.put("/updateProject/:id", projectController.update);

//delete lógico (patch)
router.patch("/delete-project/:id", projectController.deleteProjectById);

export default router;
