const express = require("express");

const app = express();

function userMiddleware(req, res, next) {
  if (username != "admin" && password != "pass") {
    res.status(403).json({
      msg: "Incorrect Inputs",
    });
  } else {
    next();
  }
};

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.staus(403).json({
      msg: "Incorrect Inputs",
    });
  } else {
    next();
  }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
  // Do something with the kidneys
  res.send("Your heart is healthy");
});

app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
  // Do something with the kidneys

  res.send("Your kidney is healthy");
});

app.get("/heart-checkup", userMiddleware, function (req, res) {
  //Do something with the heart

  res.send("Your heart is fine");
});

app.listen(3000);