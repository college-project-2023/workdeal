const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
},{
  collection:'search'
});

const User = mongoose.model("User", UserSchema);

module.exports = User;