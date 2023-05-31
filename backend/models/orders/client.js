const mongoose = require("mongoose");
require('dotenv').config();

const conn = mongoose.createConnection(process.env.ATLAS_URI+"orders");



const OrderClientSchema = new mongoose.Schema(
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
    collection: "client",
  }
);


const OrderClient = conn.model("OrderClient", OrderClientSchema);

module.exports = OrderClient;
