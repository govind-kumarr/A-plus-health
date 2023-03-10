const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const { connection } = require("./config/db");
const { UserRouter } = require("./routes/user.route");
const { RegisterModel } = require("./models/register.model");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.post("/register", async (req, res) => {
  const { name, email, password, phone_number } = req.body;
  try {
    const new_user = new RegisterModel({
      name,
      email,
      password,
      phone_number,
    });
    // console.log(new_user)
    await new_user.save();
    return res.send("Successfully Registered");
  } catch (error) {
    res.send("Please Register");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await RegisterModel.findOne({ email, password });
  if (!user) {
    return res.send("Successfully logged in");
  }
  try {
    const token = await jwt.sign({ email }, process.env.secret);
    return res.send({
      response: "Succesfully",
      token: token,
      userid: user._id,
    });
  } catch (error) {
    console.log(error);
    return res.send("Please login");
  }
});

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send({ response: "user not logged in" });
  }
  const user_token = req.headers.authorization;
  jwt.verify(user_token, process.env.secret, function (err, decoded) {
    if (err) {
      console.log(err);
    }
    next();
  });
};

app.get("/", (req, res) => {
  res.send("Welcome to A+ Health api");
});

app.use(authentication);
app.use("/user", UserRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log(
      "Database connected listening on port http://localhost:8080"
    );
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = app;
