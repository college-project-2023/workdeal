const mongoose = require("mongoose");
require('dotenv').config();

const conn = mongoose.createConnection(process.env.ATLAS_URI+"orders");



const OrderWorkerSchema = new mongoose.Schema(
  {
    orderByUid: {
      type: String,
      required: true,
    },
    orderByName: {
      type: String,
      required: true,
    },
    orderToName: {
      type: String,
      required: true,
    },
    orderToUid:{
      type:String,
      required:true
    },
    amount: {
      type: String,
      required: true,
    },
    address:{
      type:String,
      required:true,
    },
    service:{
      type:String,
      required:true
    },
    status: {
      type: String,
      required: true,
    }
  },
  {
    collection: "works",
  }
);


const OrderWorker = conn.model("OrderWorker", OrderWorkerSchema);

module.exports = OrderWorker;
