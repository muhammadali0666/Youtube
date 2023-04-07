const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {usersRouter} = require("./router/register.router.js");

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

//////////////// router

app.use("/users", usersRouter)

app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
