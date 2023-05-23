const mongoose = require("mongoose");

const UserClientSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
},{
  collection:"users/client"
});

const UserClient = mongoose.model("UserClient", UserClientSchema);

module.exports = UserClient;



