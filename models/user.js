const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const UserSchema = new Schema({
  name: { type: String, maxLength: 50, required: true },
  email: { type: String, maxLength: 100, required: true },
  password: { type: String, required: true },
});

module.exports = mongooose.model("User", UserSchema);
