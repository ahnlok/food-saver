const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
