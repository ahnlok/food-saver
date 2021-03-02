const mongoose = require("mongoose");
const ObjectId = require('mongoose').Types.ObjectId;
const Schema = mongoose.Schema;

const itemsSchema = new mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  name: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true,
  },
  expiration: {
    type: String,
    trim: true
  }
})

const Item = mongoose.model("Item", itemsSchema);

module.exports = Item;