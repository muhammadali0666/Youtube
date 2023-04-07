const { Router } = require("express");
const {getUsers, authRegister} = require("../controller/register.ctr.js");

const usersRouter = Router();

usersRouter.get("/list", getUsers);
usersRouter.post("/post", authRegister);

module.exports = {
  usersRouter
};
