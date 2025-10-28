import express from 'express';
import {register,  login, getAllUser } from '../controller/userController.js'

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/login',login)
userRoute.get('/getusers',getAllUser)

export default userRoute