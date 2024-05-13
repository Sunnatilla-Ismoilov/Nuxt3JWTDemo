import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  try {
    await mongoose.connect(config.MONGODB_URI);
    return { statusCode: 201 };
  } catch (error) {
    return { statusCode: 500 };
  }
};
