const Category = require("../models/category");
const MenuItem = require("../models/menuItem");

exports.home_page = (req, res, next) => {
  Category.find()
    .sort()
    .exec(function (err, list_category) {
      if (err) return next(err);
      res.render("index", {
        title: "Food Delivery App",
        categories: list_category,
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
