const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("You have " + kidneyLength + " kidneys");
});

// Global way of doing it

app.use(function(err, req, res, next) {
  res.json({
    msg: "Sorry something went wrong"
  });
});

app.listen(3000);