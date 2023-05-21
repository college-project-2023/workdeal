const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  }
},{
  collection:'users/client'
});

const UserClient = mongoose.model("UserClient", UserSchema);

module.exports = UserClient;