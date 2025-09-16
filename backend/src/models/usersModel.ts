import mongoose from "mongoose";

export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
}

const userSchema = new mongoose.Schema<UserType>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;