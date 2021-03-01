const mongoose = require("mongoose");
const ObjectId = require('mongoose').Types.ObjectId;
const Schema = mongoose.Schema;

const itemsSchema = new mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  items: [
    {
      name: String,
      category: String,
      expiration: String,
    },
  ],
})

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;