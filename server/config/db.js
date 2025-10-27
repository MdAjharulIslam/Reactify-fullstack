import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("mongodb connected sucssfully");
  } catch (error) {
    console.error("mongodb connection failed", error.message);
  }
};

export default connectDB;
