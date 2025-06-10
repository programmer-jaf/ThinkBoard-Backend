import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateToken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_IN,
    });
    return token;
  } catch (error) {
    console.log("Error while generating token", error);
  }
}

export default generateToken;

