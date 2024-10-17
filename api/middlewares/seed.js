/* 
ESTE ARCHIVO NO DEBE SER SUBIDO AL REPOSITORIO DEBIDO A SU PELIGROSIDAD

ESTE ARCHIVO NO DEBE SER SUBIDO AL REPOSITORIO DEBIDO A SU PELIGROSIDAD

ESTE ARCHIVO NO DEBE SER SUBIDO AL REPOSITORIO DEBIDO A SU PELIGROSIDAD

ESTE ARCHIVO NO DEBE SER SUBIDO AL REPOSITORIO DEBIDO A SU PELIGROSIDAD

ESTE ARCHIVO NO DEBE SER SUBIDO AL REPOSITORIO DEBIDO A SU PELIGROSIDAD

ESTE ARCHIVO NO DEBE SER SUBIDO AL REPOSITORIO DEBIDO A SU PELIGROSIDAD
*/

import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "../models/userModel.js";
import User from "../models/userModel.js";

dotenv.config();

// Conectar a la base de datos
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error conectando a la base de datos", error);
    process.exit(1); // Salir del proceso si la conexión falla
  }
};

// Función para poblar la base de datos
const seedDatabase = async () => {
  try {
    // Verificar si hay usuarios disponibles para ser dueños de los proyectos
    const users = await User.find();
    if (users.length === 0) {
      console.error(
        "No hay usuarios disponibles para asignar a los proyectos."
      );
      return;
    }

    // Lista de categorías disponibles
    const categories = [
      "Fintech",
      "HealthTech",
      "EdTech",
      "Social Media",
      "HRTech",
      "Videogames",
      "e-Commerce",
      "Others",
    ];

    // Crear 10 proyectos de ejemplo
    const projects = [];
    for (let i = 1; i <= 10; i++) {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const randomUser = users[Math.floor(Math.random() * users.length)];

      const newProject = new Project({
        name: `Proyecto ${i}`,
        description: `Este es un proyecto de ejemplo número ${i}.`,
        category: randomCategory,
        img: [
          `https://via.placeholder.com/150?text=Proyecto+${i}`,
          `https://via.placeholder.com/150?text=Imagen+${i}`,
        ],
        goal_amount: Math.floor(Math.random() * 10000) + 5000, // Monto meta entre 5000 y 15000
        current_amount: Math.floor(Math.random() * 5000), // Cantidad recaudada entre 0 y 5000
        creation_date: new Date(),
        deadline: new Date(
          Date.now() + Math.floor(Math.random() * 30 + 30) * 24 * 60 * 60 * 1000
        ), // Fecha límite de 1 a 2 meses
        status: "active",
        owner: randomUser._id, // Asignar un usuario aleatorio como dueño
        rewards: [
          {
            name: "Bronce",
            description: "Agradecimiento especial por la contribución",
            category: "Bronce",
            amount: 50,
          },
          {
            name: "Silver",
            description: "Acceso a contenido exclusivo",
            category: "Silver",
            amount: 100,
          },
        ],
      });

      projects.push(newProject);
    }

    // Guardar los proyectos en la base de datos
    await Project.insertMany(projects);
    console.log("10 proyectos fueron agregados a la base de datos.");
  } catch (error) {
    console.error("Error al poblar la base de datos:", error);
  } finally {
    mongoose.connection.close(); // Cerrar la conexión a la base de datos
  }
};

// Ejecutar el script
const runSeed = async () => {
  await connectDb();
  await seedDatabase();
};

runSeed();

/* 

Explicación:
1- Conexión a la base de datos: El script se conecta a la base de datos utilizando la URI de MongoDB almacenada en .env.

2- Verificación de usuarios: El script primero verifica si hay usuarios registrados en la base de datos para asignarles los proyectos como propietarios. Si no hay usuarios, el script no procede.

3- Creación de proyectos: Se crean 10 proyectos con:

Nombres de proyectos (Proyecto 1, Proyecto 2, etc.).
Descripciones aleatorias.
Una categoría seleccionada al azar de una lista predefinida.
Dos imágenes de ejemplo.
Un objetivo de recaudación aleatorio entre 5000 y 15000.
Una cantidad actual aleatoria recaudada (entre 0 y 5000).
Una fecha de creación que es la fecha actual y una fecha límite aleatoria de 1 a 2 meses en el futuro.
Dos niveles de recompensas: Bronce y Silver.

4- Guardar en la base de datos: Una vez generados los proyectos, se insertan en la base de datos.

EJECUTAR EL SCRIPT EN LA CONSOLA CON EL SIGUIENTE COMANDO:
> node seed.js

*/
