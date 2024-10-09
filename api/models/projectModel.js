import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  goal_amount: {
    type: Number,
    required: true,
  },
  current_amount: {
    type: Number,
    required: true,
    default: 0,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "pending", "completed"],
    default: "pending",
  },
  rewards: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      min_contribution: {
        type: Number,
        required: true,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Project", projectSchema);
