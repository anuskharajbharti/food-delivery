var express = require("express");
var router = express.Router();

const category_controller = require("../controllers/categoryController");

/* GET home page. */
router.get("/", category_controller.home_page);

// menu
router.get("/menu", category_controller.menu);

// item detail
router.get("/menu/:id", category_controller.item_detail);

// item add a item to cart
router.post("/menu/:id", category_controller.cart);

router.post("/cart/checkout", category_controller.checkout);

module.exports = router;
