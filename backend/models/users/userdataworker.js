const mongoose = require("mongoose");

const UserWorkerSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    aadhar: {
      type: String,
      required: true,
    },
    idtoken: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname:{
      type: String,
      required: true,
    },
    mobile:{
      type: String,
      required: false,
    },
    address:{
      type: String,
      required: false,
    },
    city:{
      type: String,
      required: false,
    },
    zipcode:{
      type: String,
      required: false,
    },
    statename:{
      type: String,
      required: false,
    },
    country:{
      type: String,
      required: false,
    },
    imageUrl:{
      type: String,
      required: false,
    },
    typeofacc:{
      type:String,
      required:true,
    },
    service:{
      type:String,
      required:false
    }
  },
  {
    collection: "users/worker",
  }
);

const mydb = mongoose.connection.useDb('workdeal');
const UserWorker = mydb.model("UserWorker", UserWorkerSchema);

module.exports = UserWorker;
