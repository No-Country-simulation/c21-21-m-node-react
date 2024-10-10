import mongoose from "mongoose";

const backerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  contribution: {
    type: Number,
    required: true,
  },
  contribution_date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Backer", backerSchema);
