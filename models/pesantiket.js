const mongoose = require('mongoose')

const pesanSchema = new mongoose.Schema({
    trip: String,
    passenger: String,
    seatclass: String,
})

const pesan = mongoose.model('DataPlane', pesanSchema)

module.exports = pesan
