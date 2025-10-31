import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
dotenv.config();

import homeRoute from './routes/homeRoute.js';
import cors from 'cors'
import connectDB from './config/db.js';

import userRoute from './routes/userRoute.js';
import productRoute from './routes/productRoute.js'
import imagekit from "./config/imagekit.js";
import multer from 'multer';



const app = express();


const PORT = 4000;
await connectDB();
app.use(express.json())

const allowOrigin = [
      'http://localhost:5173',
  'https://grocery-app-self.vercel.app'
]
app.use(cors({
    origin:allowOrigin,
    credentials:true
}));

app.use(express.urlencoded({extended:true}));
app.get('/', (req, res)=>{
    res.send("app working on")
})
app.use('/api',homeRoute)
app.use('/api/user',userRoute)

 app.use('/api/product',productRoute)

app.listen(PORT, ()=>{
    console.log(`the app is running on Port ${PORT}`)
})