const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is equired."
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last name is required."
  },

  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  foodItems: [
    {
        foodStorageLocation: {
            type: String,
            required: true
        },
        foodItemName: {
            type: String,
            required: true
        },
        foodItemQuantity: {
            type: Number
        },
        foodItemUnit: {
            type: String
        },
        expirationDate: {
            type: Date,
            required: true
        },
        foodItemDescription: {
            type: String
        },
        foodItemRecipeSuggestions: {
            type: String   
        }
    }
]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;