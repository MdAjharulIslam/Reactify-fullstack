import express from "express";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const  token  = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.json({
        success: false,
        message: "token not provided",
      });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.json({
        success: false,
        message: "Invalid token",
      });
      
      
    }
    req.auth = decode;
    next()
  } catch (error) {
    console.error(error.message)
    return res.json({
        
        success:false,
        message:"internal server error"
    })
  }
};

export default auth;