import express from "express";
import upload from "../middleware/multer.js";
import { addImage, getAllProduct, getProductById, toggleProduct } from "../controller/productController.js";


const productRoute = express.Router();

productRoute.post('/add',upload.single('image'), addImage)
productRoute.get('/allproduct', getAllProduct)
productRoute.get('/singleProduct/:id', getProductById)
productRoute.post('/toggle/:id', toggleProduct)

export default productRoute