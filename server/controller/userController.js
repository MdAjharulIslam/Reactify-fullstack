import express from "express";
import User from "../models/User";

export const register = async(req, res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
          return  res.json({
                success:false,
                message:"All field are required"
            })
        }

        const exestingUser = await User.findOne({email})
    } catch (error) {
        console.error(error.message)
    }
}