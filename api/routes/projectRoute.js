import projectController from "../controllers/projectController.js";
import express from "express";

const router = express.Router();

//post
router.post("/create-project", projectController.create);

//get
router.get("/get-projects", projectController.getAllProjects);
router.get("/get-project/:id", projectController.getProjectById);

//update
router.put("/update-project/:id", projectController.update);

//delete lógico (patch)
router.patch("/delete-project/:id", projectController.deleteProjectById);

export default router;
