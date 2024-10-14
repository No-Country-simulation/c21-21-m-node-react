import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile_picture: {
    type: String, //URL de la imagen del perfil, que sera la de google en un inicio y despues puede actualizarla
  },
  role: {
    type: String,
    required: true,
    enum: ["inversor", "administrator", "creator"],
    default: "inversor",
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

export default mongoose.model("User", userSchema);
