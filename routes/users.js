var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(`respond with a resource`);
});

router.get("/cool", (req, res) => {
  res.send("<h1>YOu are So coOl!!</h1>");
});

module.exports = router;
