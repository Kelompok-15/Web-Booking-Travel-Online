const userData = require('../models/signup')

async function find() {
    return await userData.find({})
}

async function create(name, email, number, password) {
    return await userData.create(
        {
            fullname: name,
            email: email,
            phonenumber: number,
            password: password
        }
    )
}

module.exports = {
    find,
    create
}
