import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateToken = (userId) => {

  try {
    const token = jwt.sign({ userId }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_IN,
    });
    return token;
  } catch (error) {
    console.log("Error while generating token", error);
  }
}

export default generateToken;

