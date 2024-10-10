import {create, getAllProjects, getProjectById, updateProject} from "../controllers/projectController.js";
import express from "express";

const router = express.Router();

//post
router.post("/create-project", create);

//get
router.get("/get-projects", getAllProjects);
router.get("/get-project/:id", getProjectById);

//Patch
router.patch("/update-project", updateProject);


export default router;
