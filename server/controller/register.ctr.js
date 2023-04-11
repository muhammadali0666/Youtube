const pool = require("../config/db.config.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const getUsers = async (req, res) => {
  const reader = await pool.query(`select * from users`);
  res.send(reader.rows);
};

const authRegister = async (req, res) => {
  try {

    // if (req.files) {
    //   console.log(req.files);
    //   let files = req.files.file;
    //   let filename = Date.now() + path.extname(files.name);
  
    //   files.mv("img/" + filename, function (err) {
    //     if (err) {
    //       res.send(err);
    //     } else {
    //       res.send({
    //         img: `/img/${filename}`,
    //       });
    //     }
    //   });
    // }
    const { username, email, password } = req.body;

    const foundedUser = await pool.query(
      `select * from users where email = $1`,
      [email]
    );

    const hashPassword = await bcrypt.hash(password, 12);

    if (!foundedUser.rows[0]) {
      await pool.query(
        `insert into users(username, email, password) values($1, $2, $3)`,
        [username, email, hashPassword]
      );
      return res.send({
        msg: "You are registrated",
      });
    } else {
      return res.send({
        msg: "email already exists"
      });
    }
  } catch {
    res.send("error");
  }
};

const authLogin = async (req, res) => {
  try{
    const { email, password } = req.body;

  const foundedUser = await pool.query(`select * from users where email = $1`, [
    email,
  ]);

  if (!foundedUser.rows.length) {
    return res.send({
      msg: "you haven't registated",
    });
  }

  const find = foundedUser.rows[0].id;
  const user = await pool.query(`select * from users where id = $1`, [find]);

  let end = user.rows[0].password;

  const checkhash = await bcrypt.compare(password, end);
  if (checkhash) {
    let token = jwt.sign(
      { id: find, email: email, password: password },
      process.env.SEKRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    return res.send({
      msg: "Success",
      token,
    });
  } else {
    res.send({
      msg: "Password wrong",
    });
  }
  }
  catch{
    res.send("error")
  }
};

module.exports = {
  getUsers,
  authRegister,
  authLogin,
};
