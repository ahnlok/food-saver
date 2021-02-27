const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the food.",
  },
  category: {
    type: String,
    trim: true,
    required: "Where is your item located at?"
  },
  expiration: {
    type: String,
    trim: true,
    required: "Please enter the expiration date of your item"
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;