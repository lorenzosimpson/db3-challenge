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

// SELECT Steps.id, Schemes.scheme_name, Steps.step_number, Steps.instructions
// FROM Steps
// JOIN Schemes on Steps.scheme_id = Schemes.id
// where Schemes.id = ''
// order by step_number;

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => findById(ids[0]))
}
// INSERT INTO Schemes (id, scheme_name)
// VALUES (null, 'Write SQL Queries');

function update(changes, id) {
    return db('schemes')
    .update(changes)
    .where({ id: id})
    .then(() => findById(id))
}

// UPDATE Schemes
// SET scheme_name = 'Do Some Stuff'
// WHERE id = '10';

function remove(id) {
    return db('schemes')
        .del()
        .where({ id: id})
        .then(deleted => deleted)
}
// DELETE FROM Schemes 
// WHERE id = '10';

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};