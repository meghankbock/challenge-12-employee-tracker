const viewAllRoles = `SELECT * FROM roles`;

const addRole = `INSERT INTO roles (name) VALUES (?)`;

const deleteRole = ``;

const sql = {
    view: viewAllRoles,
    add: addRole,
    delete: deleteRole,
};

module.exports = {viewAllRoles, addRole, deleteRole};