const viewAllRoles = `SELECT * FROM roles`;

const addRole = `INSERT INTO roles (name) VALUES (?)`;

const deleteRole = ``;

module.exports = {
    viewAllRoles, 
    addRole, 
    deleteRole
};