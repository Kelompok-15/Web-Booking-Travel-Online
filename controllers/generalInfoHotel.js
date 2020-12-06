const generalInfoHotel = require('../models/generalInfoHotel')

async function find() {
    return await generalInfoHotel.find({})
}
async function create(gname, email, cname, phoneno) {
    return await generalInfoHotel.create({
        gname : gname,
        email : email,
        cname : cname,
        phoneno : phoneno
    })
}
async function destroy() {
    return await generalInfoHotel.deleteMany();
}
module.exports = {
    find,
    create,
    destroy
}
