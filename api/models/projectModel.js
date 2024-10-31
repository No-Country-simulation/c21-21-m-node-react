import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  owner: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
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
    enum: ["fintech", "health", "tech", "education", "e-Commerce", "other"],
    required: true,
  },
  img: {
    type: String,
  },
  goal_amount: {
    type: Number,
    required: true,
  },
  current_amount: {
    type: Number,
    default: 0,
  },
  creation_date: {
    type: Date,
    required: true,
  },
  deadline: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "pending", "completed", "rejected"],
  },
  bankDetails: {
    accountHolder: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
    bankName: {
      type: String,
    },
    swiftCode: {
      type: String,
    },
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
      },
      description: {
        type: String,
      },
      category: {
        type: String,
        enum: ["Bronce", "Silver", "Gold", "Platinum"],
      },
      amount: {
        type: Number,
      },
      img: {
        type: String,
      },
    },
  ],
  updates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UpdateProject",
    },
  ],

  //isDeleted y deletedAt son campos hechos para la eliminación lógica
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

export default mongoose.model("Project", projectSchema);
