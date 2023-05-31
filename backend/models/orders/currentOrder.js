const mongoose = require("mongoose");
require('dotenv').config();

const conn = mongoose.createConnection(process.env.ATLAS_URI+"orders");



const CurrentOrderWorker = new mongoose.Schema(
  {
    idforwork: {
      type: String,
      required: true,
    },
    uid:{
        type:String,
        required:true,
    }
  },
  {
    collection: "currentworks",
  }
);


const CurrentOrder = conn.model("CurrentOrderWorker", CurrentOrderWorker);

module.exports = CurrentOrder;
