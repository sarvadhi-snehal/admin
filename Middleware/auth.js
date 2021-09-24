const jwt = require("jsonwebtoken");
const config = require("config");
const { OAuth2Client } = require("google-auth-library");

const secret = "superSecret";

module.exports = function async(req, res, next) {
  console.log(req);
  try {
    // const token = req.header("x-auth-token");
    const token = req.headers.authorization.split(" ")[0];

    const iscustomAuth = token.length < 500;
    let decodedData;

    if (token && iscustomAuth) {
      decodedData = jwt.verify(token, superSecret);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token, secret);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
    console.log(error);
  }
};
