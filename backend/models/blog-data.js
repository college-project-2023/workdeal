const mongoose = require("mongoose");

const BlogData = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  header1: {
    type: String,
    required: true,
  },
  content1: {
    type: String,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  li1: {
    type: String,
    required: true,
  },
  li2: {
    type: String,
    required: true,
  },
  li3: {
    type: String,
    required: true,
  },
  li4: {
    type: String,
    required: true,
  },
  header2: {
    type: String,
    required: true,
  },
  content2: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  }
},{
  collection:"blog"
});


const mydb = mongoose.connection.useDb('workdeal');
const blogdata = mydb.model("blog-data", BlogData);

module.exports = blogdata;
