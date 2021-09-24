const Admin = require("../Model/auth.js");
const express = require("express");

const { check, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Model/user");
const config = require("config");
const router = express.Router();
const multer = require("multer");

const signup = async (req, res) => {
  const { email, name, password, password2 } = req.body;
  const avatar = req.file.filename;
  const existingUser = await Admin.findOne({ email });
  if (existingUser)
    return res.status(404).json({ message: "User already exist" });
  if (password !== password2)
    return res.status(404).json({ message: "password not match" });
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const result = await Admin.create({
      email,
      password: hashedPassword,
      name,
      avatar,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "superSecret",
      { expiresIn: "1h" }
    );
    res.status(200).json({ user: result, token });
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Admin.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "superSecret",
      { expiresIn: "1h" }
    );
    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { signup, signin };
