const mongoose = require("mongoose");

const UserWorkerSchema = new mongoose.Schema(
  {
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
    }
  },
  {
    collection: "users/worker",
  }
);

const UserWorker = mongoose.model("UserWorker", UserWorkerSchema);

module.exports = UserWorker;
