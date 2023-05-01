// OrderStatus model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderStatusSchema = new Schema({
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model("OrderStatus", OrderStatusSchema);
