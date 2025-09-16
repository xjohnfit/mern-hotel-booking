import {Request, Response} from "express";
import User from "../models/usersModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userRegister = async (req: Request, res: Response) => {
    try {

        const {email, password, firstName, lastName, isAdmin} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Field validation
        if(!email || !password || !firstName || !lastName) {
            return res.status(400).json({message: "Email, password, first name, and last name are required"});
        }

        //check password strength
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!passwordRegex.test(password)) {
            return res.status(400).json({message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"});
        }

        // Check if user already exists
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({message: "User already exists"});
        }

        const newUser = new User({...req.body, password: hashedPassword});
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
        
        res.cookie("authToken", token, {httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", maxAge: 24 * 60 * 60 * 1000});
        
        return res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Internal Server Error"});
    }
}