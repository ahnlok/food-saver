
// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   email: {
//     type: String,
//     trim: true,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     trim: true,
//   },
//   food: [{
//     type: Schema.Types.ObjectId, 
//     ref: 'Food'
//   }]
// });

// userSchema.pre("save", function (next) {
//   this.email = this.email.toLowerCase();
//   next();
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
