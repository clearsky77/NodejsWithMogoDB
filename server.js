const express = require("express");
const mongoose = require("mongoose");
const server = express();
const User = require("./model/User"); // 스키마를 담아서

require("dotenv").config({ path: "variables.env" });

server.get("/", (req, res) => {
  const newUser = new User(); // 유저 객체를 생성하여
  newUser.email = "emily3267@yahoo.co.jp";
  newUser.name = "Emily";
  newUser.age = "31";
  newUser
    .save() // 저장하겠다
    .then((data) => {  // 저장 후에 리턴 받는 data 변수
      console.log(data);
      res.json({
        message: "User Create Successfully",
      });
    })
    .catch((err) => {  // 저장시 에러 생기면
      res.json({
        message: "User was not Successfully created",
      });
    });
});

server.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  } else {
    mongoose.connect(
      process.env.MONGODB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Connected to database successfully");
        }
      }
    );
  }
});
