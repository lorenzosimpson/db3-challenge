const db = require('../data/dbConfig');

function find() {
    return db.select('*').from('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first()
}


module.exports = {
    find,
    findById,
};