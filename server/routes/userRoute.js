import express from 'express';
import userController from '../controller/userController.js'

const userRoute = express.Router();

userRoute.post('/register', userController);

export default userRoute