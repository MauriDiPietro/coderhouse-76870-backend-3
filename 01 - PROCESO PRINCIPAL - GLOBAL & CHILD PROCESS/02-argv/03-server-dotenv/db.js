import { connect } from "mongoose";
import config from "./config.js";

export const connectDB = async () => {
  try {
    await connect(config.MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};
