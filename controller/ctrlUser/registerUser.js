import userService from "#service/userService.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "Email in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.registerUser({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      user: {
        email: user.email,
        subscription: user.subscription,
        avatarURL: user.avatarURL,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
