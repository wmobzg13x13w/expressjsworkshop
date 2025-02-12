const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

const router = require("./routes/user");

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("app is working..");
});

app.get("/msg", (req, res) => {
  res.send("express is working!");
});

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("connected to db!"));

app.use("/user", router);
