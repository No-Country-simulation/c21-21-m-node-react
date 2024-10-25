import express from "express";
import projectController from "../controllers/projectController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import upload from "../config/multerConfig.js";

const router = express.Router();


//post
router.post("/createProject", upload.single('img'), projectController.create);

//get
router.get("/getProjects", projectController.getAllProjects);
router.get("/getProject/:id", projectController.getProjectById);

//update
router.put("/updateProject/:id", upload.single('img'), projectController.update);

//delete lógico (patch)
router.patch("/delete-project/:id", projectController.deleteProjectById);

export default router;
