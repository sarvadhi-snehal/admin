const express = require("express");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
// const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../Model/user");
const config = require("config");
const router = express.Router();
const multer = require("multer");
var fs = require("fs");
const e = require("express");
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

//Calling the "multer" Function
const upload = multer({
  storage: multerStorage,
});

//@Route create user
//@DESC api/users/create
//Error - getting an emty object ?? :(
router.post("/create", upload.single("avatar"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
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
});

// /@api/users
// get all Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ data: -1 });
    res.json(users);
  } catch (err) {
    console.log(err.mesage);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    fs.unlinkSync(`${__dirname}/../../uploads/${user.avatar}`);
    await user.remove();
    res.json({ msg: "user removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/editUser", upload.single("avatar"), async (req, res) => {
  try {
    let user = await User.findById(req.body._id);

    if (req.file) {
      fs.unlinkSync(`${__dirname}/../../uploads/${user.avatar}`);
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
});

module.exports = router;
