// MenuItem model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
});

MenuItemSchema.virtual("url").get(function () {
  return `/menu/${this._id}`;
});

module.exports = mongoose.model("menu_items", MenuItemSchema);
