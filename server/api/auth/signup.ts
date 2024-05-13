import UserModel from "~/server/models/User";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(body.password, salt);
    const hashedPassword2 = bcrypt.hashSync(body.password2, salt);
    body.password = hashedPassword;
    body.password2 = hashedPassword2;
    await UserModel.create(body);
    return { statusCode: 201 };
  } catch (error) {
    return { statusCode: 422 };
  }
});
