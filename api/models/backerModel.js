import mongoose from "mongoose";

const backerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contribution: {
    type: Number,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

export default mongoose.model("Backer", backerSchema);
