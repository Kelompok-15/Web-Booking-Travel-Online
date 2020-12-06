const mongoose = require('mongoose')

const pesankeretaSchema = new mongoose.Schema({
    date : String,
    name : String
})

const pesankereta = mongoose.model('DataTrain', pesankeretaSchema)

module.exports = pesankereta
