import mongoose from "mongoose";
import User from "./models/userModel.js";
import Project from "./models/projectModel.js";
import Backer from "./models/backerModel.js";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://noCountry:123key123@crowfundingdb.gjmlc.mongodb.net/"
    );
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await User.deleteMany({});
    await Project.deleteMany({});
    await Backer.deleteMany({});

    const user1 = new User({
      name: "Lionel",
      email: "lionel@test.com",
      password: "password123",
      role: "creator",
    });

    const user2 = new User({
      name: "Sofia",
      email: "sofia@test.com",
      password: "password123",
      role: "inversor",
    });

    const user3 = new User({
      name: "AdminUser",
      email: "admin@test.com",
      password: "adminpass",
      role: "administrator",
    });

    await user1.save();
    await user2.save();
    await user3.save();

    console.log("Usuarios creados con éxito");

    const project1 = new Project({
      name: "Proyecto Innovador",
      description: "Este es un proyecto increíble que cambiará el mundo.",
      creator: { name: user1.name, email: user1.email },
      goal_amount: 10000,
      current_amount: 5000,
      deadline: new Date("2024-12-31"),
      owner: user1._id,
      status: "active",
    });

    const project2 = new Project({
      name: "Proyecto Ecológico",
      description: "Un proyecto para salvar el medio ambiente.",
      creator: { name: user1.name, email: user1.email },
      goal_amount: 15000,
      current_amount: 7000,
      deadline: new Date("2025-06-30"),
      owner: user1._id,
      status: "active",
    });

    await project1.save();
    await project2.save();

    console.log("Proyectos creados con éxito");

    // Actualizar los usuarios para incluir los proyectos creados
    await User.findByIdAndUpdate(user1._id, {
      $push: { projects: project1._id },
    });

    await User.findByIdAndUpdate(user1._id, {
      $push: { projects: project2._id },
    });

    const backer1 = new Backer({
      user: user2._id,
      project: project1._id,
      contribution: 1000,
    });

    const backer2 = new Backer({
      user: user2._id,
      project: project2._id,
      contribution: 2000,
    });

    await backer1.save();
    await backer2.save();

    console.log("Backers creados con éxito");

    console.log("Base de datos rellenada exitosamente");
    process.exit();
  } catch (error) {
    console.error("Error al rellenar la base de datos:", error);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  await connectDB();
  await seedData();
};

seedDatabase();
