const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Wiki Home page</h1>");
});

router.get("/about", (req, res) => {
  res.send("<h1>Wiki about page</h1>");
});

module.exports = router;
