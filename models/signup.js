const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    phonenumber: String,
    password: String
})

const signup = mongoose.model('dataUser', signupSchema)

module.exports = signup;
