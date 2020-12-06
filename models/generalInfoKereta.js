const mongoose = require('mongoose')

const infoTrainSchema = new mongoose.Schema({
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

const infoTrain = mongoose.model('generalInfoKereta', infoTrainSchema)

module.exports = infoTrain
