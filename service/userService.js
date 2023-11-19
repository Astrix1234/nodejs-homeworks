import User from "./schemas/user.js";

import bcrypt from "bcryptjs";

const registerUser = async (userData) => {
  const newUser = new User(userData);
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

export default {
  registerUser,
  findUserByEmail,
  validateUser,
  updateSubscription,
  updateToken,
  logoutUser,
  getCurrent,
};
