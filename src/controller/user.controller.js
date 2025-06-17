import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../helper/generatetoken.helper.js";
import config from "../config/config.js";
import validator from "validator";

export const signUpController = async (req, res) => {
  try {
    console.log("Incoming request", req.body);

    // ✅ Destructure fields
    const { firstName, lastName, email, password } = req.body;

    // ✅ Validate input
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // ✅ Remove password before sending response
    const userObj = newUser.toObject();
    delete userObj.password;

    return res.status(201).json({
      message: "User Signed Up Successfully",
      user: userObj,
    });
  } catch (error) {
    console.error("Sign Up Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    // ✅ Remove password before sending user data
    const userObj = user.toObject();
    delete userObj.password;

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: config.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 48 * 60 * 60 * 1000,
      })
      .json({
        message: "User Signed In Successfully",
        user: userObj,
        token: token, // Optional: also sending token if you need frontend side
      });
  } catch (error) {
    console.error("Sign In Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const signOutController = async (req, res) => {
  try {
    return res.status(200).clearCookie("token").json({
      message: "User Signed Out Successfully",
    });
  } catch (error) {
    console.error("Sign Out Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
