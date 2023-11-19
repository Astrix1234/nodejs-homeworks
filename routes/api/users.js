import express from "express";
import passport from "passport";

import { register } from "../../controller/ctrlUser/registerUser.js";

import { login } from "../../controller/ctrlUser/loginUser.js";

import { updateUserSubscription } from "../../controller/ctrlUser/updateUserSubscription.js";

import { logout } from "../../controller/ctrlUser/logoutUser.js";

import { getCurrentUser } from "../../controller/ctrlUser/getCurrentUser.js";

const routerUsers = express.Router();

routerUsers.post("/users/signup", register);

routerUsers.post("/users/login", login);

routerUsers.patch(
  "/users",
  passport.authenticate("jwt", { session: false }),
  updateUserSubscription
);

routerUsers.get(
  "/users/logout",
  passport.authenticate("jwt", { session: false }),
  logout
);

routerUsers.get(
  "/users/current",
  passport.authenticate("jwt", { session: false }),
  getCurrentUser
);

export default routerUsers;
