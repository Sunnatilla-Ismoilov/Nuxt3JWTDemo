import { Nitro } from "nitropack";
import mongoose from "mongoose";
import { config } from "dotenv";

export default async (_nitroApp: Nitro) => {
  config();
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    return { statusCode: 201 };
  } catch (error) {
    return { statusCode: 500 };
  }
};
