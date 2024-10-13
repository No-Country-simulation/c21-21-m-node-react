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
  category: {
    type: String,
    enum: [
      "Fintech",
      "HealthTech",
      "EdTech",
      "Social Media",
      "HRTech",
      "Videogames",
      "e-Commerce",
      "Others",
    ],
    required: true,
  },
  img: [
    {
      type: String,
      required: true,
    },
  ],
  goal_amount: {
    type: Number,
    required: true,
  },
  current_amount: {
    type: Number,
    required: true,
    default: 0,
  },
  creation_date: {
    type: Date,
    required: true,
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
  backers: [
    {
      name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Backer",
      },
      contribution: {
        type: Number,
      },
      contribution_date: {
        type: Date,
      },
      //AGREGAR VISIBILIDAD DE LOS BACKERS
    },
  ],
  rewards: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        require: true,
      },
      category: {
        type: String,
        enum: ["Bronce", "Silver", "Gold", "Platinum"],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UpdateProject",
    },
  ],
});

export default mongoose.model("Project", projectSchema);
