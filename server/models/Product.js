import mongoose from "mongoose";

const productSchema = await new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    image:{
        type:File,
        required:true
    }
})

const Product = mongoose.model("Product", productSchema)
export default Product