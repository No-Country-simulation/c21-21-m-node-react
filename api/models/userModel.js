import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  profile_picture: {
    type: String, //URL de la imagen del perfil, que sera la de google en un inicio y despues puede actualizarla
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
});

export default mongoose.model("User", userSchema);
