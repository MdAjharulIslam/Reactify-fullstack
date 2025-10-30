import express from "express";
import upload from "../middleware/multer";
import { addImage } from "../controller/productController";

const productRoute = express.Router();

productRoute.post('/add',upload.single('image'), addImage)