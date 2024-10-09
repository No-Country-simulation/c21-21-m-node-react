import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  creator: {
    type: String,
    required: true,
  },
  goal_amount: {
    type: Number,
    required: true,
  },
  current_amount: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive", "pending", "finally"],
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
        default: "",
      },
      min_contribution: {
        type: Number,
      },
    },
  ],
});

module.exports = mongoose.model("project", projectSchema);
