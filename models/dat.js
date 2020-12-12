const mongoose = require('mongoose');

const datSchema = new mongoose.Schema({
    fName : String,
    lName : String,
    eMail : String,
    phoneNo : String,
    fName2 : String,
    lName2 : String,
    eMail2 : String,
    phoneNo2 : String
})

const datt = mongoose.model('dat', datSchema);

module.exports = datt;