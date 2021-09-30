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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (res, req) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
mongoose.connect(
  "mongodb+srv://root:root123@cluster0.4wkwj.mongodb.net/adminTable?retryWrites=true&w=majority",
  console.log("database connected"),

  app.listen(PORT)
);
