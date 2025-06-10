/* eslint-disable no-undef */
import dotenv from 'dotenv'
dotenv.config();

// export the environment-variables
const _config = {
  PORT: process.env.PORT,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  NODE_ENV: process.env.NODE_ENV
}

const config = Object.freeze(_config)
export default config;