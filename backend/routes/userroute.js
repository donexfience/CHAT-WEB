import express from "express";
import protectRoute from "../middlewares/protectrouter.js";
import { getUsersForSidebar } from "../Controlleres/usercontroller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
