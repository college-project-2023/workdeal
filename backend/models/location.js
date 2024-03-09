const mongoose = require('mongoose');


const locationschema = mongoose.Schema({
latitude:{
    type: Number,
    required: true
},
longitude:{
    type: Number,
    required: true
},
// workid:{
//     type: String,
//     required: true
// },
clientid:{
    type: String,
    required: true
}

})
const locationModel = mongoose.model('locations',locationschema);

module.exports = locationModel;