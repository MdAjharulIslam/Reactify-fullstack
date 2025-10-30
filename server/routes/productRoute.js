import express from "express";
import upload from "../middleware/multer.js";
import { addImage } from "../controller/productController.js";


const productRoute = express.Router();

productRoute.post('/add',upload.single('image'), addImage)
export default productRoute