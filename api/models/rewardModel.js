import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
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
  project: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model("Reward", rewardSchema);
