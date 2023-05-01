// Order model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  items: [{ type: Schema.Types.ObjectId, ref: "MenuItem", required: true }],
  totalPrice: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  status: { type: Schema.Types.ObjectId, ref: "OrderStatus", required: true },
});

OrderSchema.virtual("url").get(function () {
  return `/catalog/order/${this._id}`;
});

module.exports = mongoose.model("Order", OrderSchema);
