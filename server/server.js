import express, { urlencoded } from 'express'
import homeRoute from './routes/homeRoute.js';
import cors from 'cors'
import connectDB from './config/db.js';
const app = express();


const PORT = 4000;
//await connectDB();
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res)=>{
    res.send("app working on")
})
app.use('/api',homeRoute)

app.listen(PORT, ()=>{
    console.log(`the app is running on Port ${PORT}`)
})