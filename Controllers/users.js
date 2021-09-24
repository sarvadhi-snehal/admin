const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Model/user");
var fs = require("fs");

const createUser = async (req, res) => {
  try {
    let user = new User({
      ...req.body,
      avatar: req.file.filename,
    });

    await user.save();
    console.log("user", user);
    res.status(200).json({
      status: "success",
      message: "User created successfully!!",
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(204).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await User.find().sort({ data: -1 });
    res.json(users);
  } catch (err) {
    console.log(err.mesage);
    res.status(500).send("Server Error");
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    fs.unlinkSync(`${__dirname}/../uploads/${user.avatar}`);
    await user.remove();
    res.json({ msg: "user removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
const editUser = async (req, res) => {
  try {
    let user = await User.findById(req.body._id);

    if (req.file) {
      fs.unlinkSync(`${__dirname}/../uploads/${user.avatar}`);
      Object.assign(user, { ...req.body, avatar: req.file.filename });
    } else {
      Object.assign(user, req.body);
    }

    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};
module.exports = { createUser, getAll, deleteUser, editUser };
