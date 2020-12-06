const mongoose = require('mongoose');

const generalInfoSchema = new mongoose.Schema({
    fName : String,
    lName : String,
    eMail : String,
    phoneNo : String,
    fName2 : String,
    lName2 : String,
    eMail2 : String,
    city : String,
    phoneNo2 : String
})

const info = mongoose.model('generalInfo', generalInfoSchema);

module.exports = info;