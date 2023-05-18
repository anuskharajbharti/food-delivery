const Category = require("../models/category");
const MenuItem = require("../models/menuItem");
const User = require("../models/user");
// const passport = require("passport");
// const { body, validationResult } = require("express-validator");

exports.home_page = (req, res, next) => {
  Category.find()
    .sort()
    .exec(function (err, list_category) {
      if (err) return next(err);
      res.render("index", {
        title: "Food Delivery App",
        categories: list_category,
        user: req.user,
      });
    });
};

exports.menu = (req, res, next) => {
  MenuItem.find().exec(function (err, list_items) {
    if (err) return next(err);
    res.render("menu", {
      title: "Menu",
      item_list: list_items,
    });
  });
};

exports.item_detail = (req, res, next) => {
  MenuItem.findById(req.params.id).exec(function (err, item) {
    if (err) return next(err);
    res.render("item_detail", {
      title: "Item Detail",
      item: item,
    });
  });
};

exports.cart = (req, res, next) => {
  MenuItem.findById(req.params.id).exec(function (err, menuItem) {
    if (err) return next(err);
    res.render("cart", {
      title: "Cart",
      menuItem: menuItem,
      quantity: req.body.quantity,
    });
  });
};

exports.checkout = (req, res, next) => {
  res.render("checkout");
};

exports.signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and Confirm Password do not match" });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    res.redirect("/");
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while signing up the user" });
  }
};
