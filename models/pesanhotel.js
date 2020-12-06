const mongoose = require('mongoose')

const pesanhotelSchema = new mongoose.Schema({
    date : String,
    date2 : String,
    guest : String
})

const pesanhotel = mongoose.model('DataHotel', pesanhotelSchema)

module.exports = pesanhotel
