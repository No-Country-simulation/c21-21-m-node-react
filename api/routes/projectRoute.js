import create from "../controllers/projectController.js";
import express from "express";
const router = express.Router();

//post
router.post("/create-project", create);

export default router;
