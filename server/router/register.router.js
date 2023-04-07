const { Router } = require("express");
const {getUsers, authRegister, authLogin} = require("../controller/register.ctr.js");

const usersRouter = Router();

usersRouter.get("/list", getUsers);
usersRouter.post("/register", authRegister);
usersRouter.post("/login", authLogin);

module.exports = {
  usersRouter
};
