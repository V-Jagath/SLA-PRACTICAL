import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

export const userCreate = async (req, res) => {
    try {
        const { name, email, gender, password } = req.body;

        if (!name || !email || !gender || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already registered"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            gender,
            password: hashPassword
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                gender: user.gender
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Register Failed"
        });
    }
};

export const userCheck = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password required",
                success: false
            });
        }

        const findEmail = await userModel
            .findOne({ email })
            .select("+password");

        if (!findEmail) {
            return res.status(404).json({
                message: "Email id is not found",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, findEmail.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Password is wrong",
                success: false
            });
        }

        return res.status(200).json({
            message: "Login Successful",
            success: true,
            user: {
                _id: findEmail._id,
                name: findEmail.name,
                email: findEmail.email
            }
        });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Login Failed",
            success: false
        });
    }
};


export const userShow = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userModel.findById(id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch user"
        });
    }
};


export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Update failed"
        });
    }
};



export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await userModel.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Delete failed"
        });
    }
};
