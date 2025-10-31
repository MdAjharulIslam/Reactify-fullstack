import express from 'express';
import {register,  login, getAllUser } from '../controller/userController.js'
import auth from '../middleware/auth.js'

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/login',auth,login)
userRoute.get('/getusers',getAllUser)

export default userRoute