const DataPlane = require('../models/pesantiket')

async function find() {
    return await DataPlane.find({})
}
async function create(trip, passenger, seatclass) {
    return await DataPlane.create(
        {
            trip: trip,
            passenger: passenger,
            seatclass: seatclass
        }
    )
}

async function destroy()  {
    return await DataPlane.deleteMany();
}

module.exports = {
    find,
    create,
    destroy
}
