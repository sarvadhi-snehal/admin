const jwt = require("jsonwebtoken");
const config = require("config");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com"
);
module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token authorization denied." });
  }
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "962281289281-o8jti4ni3imnsljch6j4i4pqp6ppb4mb.apps.googleusercontent.com",
    });
    const { name, email, picture } = ticket.getPayload();
    const user = await db.user.upsert({
      where: { email: email },
      update: { name, picture },
      create: { name, email, picture },
    });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
