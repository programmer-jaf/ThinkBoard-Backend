/* eslint-disable no-undef */
import mongoose from "mongoose";
import config from "../config/config";

const ConnectDatabase = async () => {
  try {
    const connection = await mongoose.connect(config.MONGODB_URI);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default ConnectDatabase;