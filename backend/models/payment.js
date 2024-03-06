const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

ptype:{
    type: String,
    required: true
},
status: {
    type: String,
    required: true
},
workId:{
    type: String,
    required: true
},
clientId:{
    type: String,
    required: true
},
price:{
    type: Number,
    required: true
},
description:{
    type: String,
    required: true
}

});

const paymentmodel = mongoose.model("paymentModel", paymentSchema);

module.exports = paymentmodel;