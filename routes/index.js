var express = require("express");
var router = express.Router();

const controller = require("../controllers/controller");

const passport = require("passport");
const User = require("../models/user");

/* GET home page. */
router.get("/", controller.home_page);

// menu
router.get("/menu", controller.menu);

// item detail
router.get("/menu/:id", controller.item_detail);

// item add a item to cart
router.post("/menu/:id", controller.cart);

router.post("/cart/checkout", controller.checkout);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", controller.signup);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// router.post("/login", controller.login);

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
