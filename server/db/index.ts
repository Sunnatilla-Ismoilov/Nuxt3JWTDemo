import { Nitro } from "nitropack";
import mongoose from "mongoose";
import { config } from "dotenv";

export default async (_nitroApp: Nitro) => {
  config();
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    return { statusCode: 201, message: "Connected to MongoDB" };
  } catch (error) {
    return { statusCode: 500, message: "Internal Server Error" };
  }
};
