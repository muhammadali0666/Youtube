const pool = require("../config/db.config.js");

const getUsers = async (req, res) => {
  const reader = await pool.query(`select * from users`);
  res.send(reader.rows);
};

const authRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const foundedUser = await pool.query(
      `select * from users where email = $1`,
      [email]
    );

    if (!foundedUser.rows[0]) {
      await pool.query(
        `insert into users(username, email, password) values($1, $2, $3)`,
        [username, email, password]
      );
      return res.send({
        msg: "You are registrated",
      });
    } else {
      return res.send("email already exists");
    }
  } catch {
    res.send("error");
  }
};

module.exports = {
  getUsers,
  authRegister,
};
