import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    profile_picture: {
      type: String, //URL de la imagen del perfil de google, despues puede actualizarla
    },
    role: {
      type: String,
      enum: ["inversor", "administrator", "emprendedor"],
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  { timestamps: true } //cosa de mongoose para saber cuando se creo y se actualizo
);

export default mongoose.model("User", userSchema);
