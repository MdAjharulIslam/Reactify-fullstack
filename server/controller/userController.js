import express from "express";
import User from "../models/User";
import bcrypt from 'bcrypt'

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
        if(exestingUser){
            return res.status(400).json({
                success:false,
                message:"User Already exist"
            })
        }
        const hashPass = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password:hashPass
        })

       return res.status(201).json({
        user,
                success:true,
                message:"User created successfully"
        })
    } catch (error) {
        console.error(error.message)
        return res.status(400).json({
            success:false,
            message:"Internal server error"
        })
    }
}