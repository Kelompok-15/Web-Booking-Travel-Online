const mongoose = require('mongoose')

const generalInfoHotelSchema = new mongoose.Schema({
    gname : String,
    cname : String,
    email : String,
    phoneno : String
})

const generalInfoHotel = mongoose.model('generalInfoHotel', generalInfoHotelSchema)

module.exports = generalInfoHotel
