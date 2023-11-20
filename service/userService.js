import User from "./schemas/user.js";

import bcrypt from "bcryptjs";
import crypto from "crypto";

const registerUser = async (userData) => {
  const gravatarHash = crypto
    .createHash("md5")
    .update(userData.email.toLowerCase())
    .digest("hex");
  const gravatarUrl = `https://www.gravatar.com/avatar/${gravatarHash}?d=identicon`;

  const newUser = new User({
    ...userData,
    avatarURL: gravatarUrl,
  });

  return newUser.save();
};

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const validateUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }
  return user;
};

const updateSubscription = async (userId, subscription) => {
  return User.findByIdAndUpdate(userId, { subscription }, { new: true });
};

const updateToken = async (userId, token) => {
  return User.findByIdAndUpdate(userId, { token }, { new: true });
};

const logoutUser = async (userId) => {
  return updateToken(userId, null);
};

const getCurrent = async (userId) => {
  return User.findById(userId, "-password -token");
};

const updateAvatar = async (userId, avatarURL) => {
  return User.findByIdAndUpdate(userId, { avatarURL }, { new: true });
};

export default {
  registerUser,
  findUserByEmail,
  validateUser,
  updateSubscription,
  updateToken,
  logoutUser,
  getCurrent,
  updateAvatar,
};
