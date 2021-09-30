const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use("/api/auth", require("./Routes/auth.js"));
app.use("/api/users", require("./Routes/users.js"));
mongoose.connect(
  "mongodb+srv://root:root123@cluster0.4wkwj.mongodb.net/adminTable?retryWrites=true&w=majority",
  console.log("database connected"),

  app.listen(PORT)
);
