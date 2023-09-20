function doLogin(req, res, next) {
  const { email, password } = req.body;
  res.sendStatus(200);
}

function doLogout(req, res, next) {
    res.sendStatus(200);
}

module.exports = { doLogin, doLogout };
