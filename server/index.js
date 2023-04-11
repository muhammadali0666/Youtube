const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {usersRouter} = require("./router/register.router.js");
const path = require("path")
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require("fs")
const pool = require("./config/db.config.js");
const {adminMiddleware} = require("./middleware/auth.middleware.js")


dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

//////////////// router

app.use("/users", usersRouter)

///////////////// middleware
app.use(adminMiddleware)

/////////////////// file upload

app.post('/file', upload.single('file'), (req, res) => {
  const file = req.file;
  const filePath = file.path;
  const fileData = fs.readFileSync(filePath);
  const orginal_name = req.file.originalname

  console.log(orginal_name);


 pool.query('INSERT INTO users(profile_img) VALUES ($1)', [orginal_name])


    res.send('File uploaded successfully');

});




app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
