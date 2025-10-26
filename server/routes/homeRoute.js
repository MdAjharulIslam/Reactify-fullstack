import express from "express";
import controller from "../controller/home.js";

const homeRoute = express.Router();

homeRoute.get('/',controller)
export default homeRoute;