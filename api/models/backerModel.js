import mongoose from "mongoose";

const backerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contribution: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("backers", backerSchema);
