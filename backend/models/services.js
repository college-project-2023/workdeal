const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  uid:{
    type: String,
    required: false
  },
  tag: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  author_thumb: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  location:{
    type:String,
    require:true,
  }
},{
  collection:"services"
});


const mydb = mongoose.connection.useDb('workdeal');
const service = mydb.model("service", ServiceSchema);

module.exports = service;
