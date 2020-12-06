const generalInfo = require('../models/generalInfo');

async function find() {
    return await generalInfo.find({});
}

async function create(fName, lName, eMail, phoneNo, fName2, lName2, eMail2, city, phoneNo2) {
    return await generalInfo.create(
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
        }
    )
}
async function destroy() {
    return await generalInfo.deleteMany();
}

module.exports = {
    find,
    create,
    destroy
}