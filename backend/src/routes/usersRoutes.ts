import express from "express";
import { userRegister } from "../controllers/UserController";

const router = express.Router();

router.post("/register", userRegister);

export default router;