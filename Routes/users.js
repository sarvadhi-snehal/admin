const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createUser,
  getAll,
  deleteUser,
  editUser,
} = require("../Controllers/users.js");
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
router.post("/create", upload.single("avatar"), createUser);

// /@api/users
// get all Users
router.get("/", getAll);

router.delete("/:id", deleteUser);

router.post("/editUser", upload.single("avatar"), editUser);

module.exports = router;
