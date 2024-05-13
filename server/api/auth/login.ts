import UserModel from "~/server/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
  const { email, password } = body;
  config();

  try {
    const user = await UserModel.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { statusCode: 401, message: "User doesn't exist!" };
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": `token=${token}; HttpOnly; Max-Age=${
          60 * 60
        }; Secure; SameSite=Strict`,
      },
      token,
      message: "User logged in successfully!",
    };
  } catch (error) {
    return { statusCode: 500, message: "Internal Server Error" };
  }
});
