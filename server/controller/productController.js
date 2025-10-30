import express from 'express'
import fs from "fs";
import imagekit from '../config/imagekit.js'
import Product from "../models/Product.js"

export const addImage = async(req, res)=>{
    try {
        const {name} = req.body
        const imageFile = req.file;

        const imageBuffer = fs.readFileSync(imageFile.path);

        const uploadImage = await imagekit.upload({
            file:imageBuffer,
            fileName:imageFile.originalname,
            folder:"product"
        })

        const product = await Product.create({
            name,
            image:uploadImage.url
        })
        res.json({
            success:true,
            message:"product added successfully",
            product
        })
    } catch (error) {
        res.json({
            success:false,
            message:"internal server error"
        })
    }
}