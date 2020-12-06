const DataHotel = require('../models/pesanhotel')

async function find() {
    return await DataHotel.find({})
}
async function create(date, date2, guest) {
    return await DataHotel.create({
        date : date,
        date2 : date2,
        guest : guest
    })
}
async function destroy() {
    return await DataHotel.deleteMany();
}
module.exports = {
    find,
    create,
    destroy
}
