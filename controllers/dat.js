const dat = require('../models/dat');

async function find() {
    return await dat.find({});
}

async function create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, phoneNo2) {
    return await dat.create(
        {
            fName :fName,
            lName : lName,
            eMail : eMail,
            phoneNo : phoneNo,
            fName2 : fName2,
            lName2 : lName2,
            eMail2 : eMail2,
            phoneNo2 : phoneNo2
        }
    )
}

async function destroy() {
    return await dat.deleteMany();
}

module.exports = {
    find,
    create,
    destroy
}