const db = require('../data/dbConfig');

function find() {
    return db.select('*').from('schemes')
}

function findById(id) {
    return db('schemes')
    .where({ id })
    .first()
}

function findSteps(id) {
    return db.select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .from('steps')
    .join('schemes', 'steps.scheme_id', 'schemes.id')
    .where('scheme_id', id)
    .orderBy('step_number')
}


module.exports = {
    find,
    findById,
    findSteps
};