import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongodb connected sucssfully")
    } catch (error) {
        console.error(error.message)
    }
}

export default connectDB;