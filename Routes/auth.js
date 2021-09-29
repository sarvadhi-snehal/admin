const express = require("express");
const router = express.Router();
const { signup, signin } = require("../Controllers/admin");
const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/admin");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});

//Calling the "multer" Function
const upload = multer({
  storage: multerStorage,
});
router.post("/signup", upload.single("avatar"), signup);

router.post("/signin", signin);

module.exports = router;
