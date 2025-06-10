import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
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
    return res.status(200).json({
      message: "User Signed In Successfully",
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
    return res.status(200).json({
      message: "User Signed Out Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
