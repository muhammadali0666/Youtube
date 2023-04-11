const { Router } = require("express");
const {getUsers, authRegister, authLogin} = require("../controller/register.ctr.js");
const {adminMiddleware} = require("../middleware/auth.middleware.js")

const usersRouter = Router();

usersRouter.get("/list", getUsers);
usersRouter.post("/register", adminMiddleware, authRegister);
usersRouter.post("/login", authLogin);

module.exports = {
  usersRouter
};
