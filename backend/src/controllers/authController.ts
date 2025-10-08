import {Request, Response} from "express";
import User from "../models/usersModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Validate email and password
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    try {
        const user = await User.findOne({ email });
        
        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

        res.cookie("authToken", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 24 * 60 * 60 * 1000 });

        return res.status(200).json({ userId: user._id, message: "Login Successful" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const logoutController = (req: Request, res: Response) => {
    res.clearCookie("authToken", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" });
    return res.status(200).json({ message: "Logout Successful" });
}