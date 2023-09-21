const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

function doLogin(req, res, next) {
  const { email, password } = req.body;

  if (email === "brunoemf@gmail.com" && password === "123456") {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
      expiresIn: parseInt(process.env.JWT_EXPIRES),
    });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
}

function doLogout(req, res, next) {
  res.sendStatus(200);
}

module.exports = { doLogin, doLogout };
