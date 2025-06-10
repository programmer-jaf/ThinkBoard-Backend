import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import generateToken from '../helper/generatetoken.helper.js';
import config from "../config/config.js";
export const signUpController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // check if all fields are present
    if (!firstName || !lastName || !email || !password) {
      throw new Error("All fields are required");
    }
    // check if email is valid
    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }

    // check if password is valid
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("User already exists");
    }

    // hash password before store it in the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create user
    const newUser = await User.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
    });

    // send response
    return res.status(201).json({
      message: "User Signed Up Successfully",
      user: newUser.toObject({ getters: true, select: "-password" }),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


export const signInController = async (req, res) => {
  try {
    // check if all fields are present
    const {email,password} = req.body;
    if (!email || !password) {
      throw new Error("All fields are required");
    }
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    }
    // generate token
    console.log("user ",user)
    const token = generateToken(user._id);
    return res
    .status(200)
    .cookie("token", token,{
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 48 * 60 * 60 * 1000,
    })
    .json({
      message: "User Signed In Successfully",
      Data:user
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const signOutController = async (req, res) => {
  try {
    return res
    .status(200)
    .clearCookie("token")
    .json({
      message: "User Signed Out Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
