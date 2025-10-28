import express from "express";
import User from "../models/User.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

 export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All field are required",
      });
    }

    const exestingUser = await User.findOne({ email });
    if (exestingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already exist",
      });
    }
    const hashPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPass,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const login = async(req, res)=>{
  try {
    const {email,password} = req.body;

    if(!email || !password){
      return res.json({
        success:false,
        message:"all field are required"
      })
    }
    const existingUser = await User.findOne({email});
    if(!existingUser){
      return res.json({
        success:false,
        message:"user not found"
      })
    }
    const verifyPass = await bcrypt.compare(password, existingUser.password)
    if(!verifyPass){
      return res.json({
        success:false,
        message:"invalid password"
      })
    }
    const token = await jwt.sign({id:existingUser._id}, process.env.JWT_SECRET,{expiresIn:"7d"})
    return res.json({
      success:true,
      message:"login successfully done",
      token
    })
    
  } catch (error) {
     console.error(error.message);
    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export const getAllUser = async(req, res)=>{
  try {
    const allUsers = await User.find();
    return res.json({
      success:true,
      allUsers
    })
    
  } catch (error) {
     console.error(error.message);
    return res.status(400).json({
      success: false,
      message: "Internal server error",
    });
  }
}