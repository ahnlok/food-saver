const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Required!  What is the name of the food item?",
  },
  category: {
    type: String,
    trim: true,
    required: "Required!  Is your food item in the pantry, refrigerator, or freezer?"
  },
  expiration: {
    type: String,
    trim: true,
    required: "Required!  Please enter the expiration date of your item!"
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;