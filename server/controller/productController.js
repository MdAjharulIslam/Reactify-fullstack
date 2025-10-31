import express from "express";
import fs from "fs";
import imagekit from "../config/imagekit.js";
import Product from "../models/Product.js";

export const addImage = async (req, res) => {
  try {
    const { name,isAvailable } = req.body;
    const imageFile = req.file;
    if (!imageFile) {
      return res.json({
        success: false,
        message: "image not uploaded",
      });
    }

    const imageBuffer = fs.readFileSync(imageFile.path);

    const uploadImage = await imagekit.upload({
      file: imageBuffer,
      fileName: imageFile.originalname,
      folder: "product",
    });

    const product = await Product.create({
      name,
      image: uploadImage.url,
      isAvailable
    });
    return res.json({
      success: true,
      message: "product added successfully",
      product,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "internal server error",
    });
  }
};


export const getAllProduct = async(req, res)=>{
  try {

    const allProduct = await Product.find();
    if(allProduct.length === 0){
      return res.json({
        success:false,
        message:"have no product available"
      })
    }
    return res.json({
      success:true,
      allProduct
    })
    
  } catch (error) {
    return res.json({
      success:false,
      message:"internal server error"
    })
  }
}

export const getProductById = async(req, res)=>{
  try {
    const {id} = req.params;

    const product = await Product.findById(id);
    if(!product){
      return res.json({
        success:false,
        message:"Product not found"
      })
    }
    return res.json({
      success:true,
      product,
      
    })
    
  } catch (error) {
    return res.json({
      success:false,
      message:"internal server error"
    })
  }
}

export const toggleProduct = async(req, res)=>{
  try {
    const {id} = req.params;
    const toggle = await Product.findByIdAndUpdate(id,{isAvailable: true})
    if (!toggle) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    return res.json({
      success:true,
      message:"Stock Updated successfully",
      
    })
  } catch (error) {
    return res.json({
      success:false,
      message:"internal server error"
    })
  }
}