const generalInfoKereta = require('../models/generalInfokereta')

async function find() {
    return await generalInfoKereta.find({})
}
async function create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2) {
    return await generalInfoKereta.create(
        {
            fName :fName,
            lName : lName,
            eMail : eMail,
            phoneNo : phoneNo,
            fName2 : fName2,
            lName2 : lName2,
            eMail2 : eMail2,
            city : city,
            phoneNo2 : phoneNo2
        })
}
async function destroy() {
    return await generalInfoKereta.deleteMany();
}
module.exports = {
    find,
    create,
    destroy
}
