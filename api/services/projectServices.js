import Project from "./models/projectModel.js";

app.post("/create-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el proyecto", error });
  }
});
