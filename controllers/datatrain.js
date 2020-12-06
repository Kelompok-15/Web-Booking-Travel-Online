const DataTrain = require('../models/pesankereta')

async function find() {
    return await DataTrain.find({})
}

async function create(date, name) {
    return await DataTrain.create(
        {
            date : date,
            name : name
        }
    )
}
async function destroy() {
    return await DataTrain.deleteMany();
}
module.exports = {
    find,
    create,
    destroy
}
