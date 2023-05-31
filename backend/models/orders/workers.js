const mongoose = require("mongoose");
require('dotenv').config();

const conn = mongoose.createConnection(process.env.ATLAS_URI+"orders");



const OrderWorkerSchema = new mongoose.Schema(
  {
    orderBy: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
  },
  {
    collection: "worker",
  }
);


const OrderWorker = conn.model("OrderWorker", OrderWorkerSchema);

module.exports = OrderWorker;
