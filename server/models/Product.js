import mongoose from "mongoose";

const productSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    image:{
        type:File,
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:true
    }
})

const Product = mongoose.model("Product", productSchema)
export default Product