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
  password: {
    type: String,
    required: true,
  },
  profile_picture:{
    type: String,
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
