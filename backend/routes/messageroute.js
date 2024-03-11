import express from "express";
import {sendMessage } from "../Controlleres/messagecontroller.js";
import protectRoute from "../middlewares/protectrouter.js";


const router = express.Router();

// router.get("/:id", protectRoute, getMessages);
router.post("/send/:id",protectRoute, sendMessage);
 
export default router;  