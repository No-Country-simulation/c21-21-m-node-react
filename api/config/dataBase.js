import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CREDENTIAL);
    console.log("Connection to the DB succesfully!");
  } catch (error) {
    console.error("Error to connect to the Data Base");
    console.log(`Details: ${error}`);
  }
};
