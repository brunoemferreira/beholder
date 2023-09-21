const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded) {
        res.locals.token = decoded;
        return next();
      }
    } catch (err) {
      console.log(err);
    }
  }

  res.sendStatus(401);
};
