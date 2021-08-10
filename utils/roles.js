const viewAllRoles = `SELECT * FROM roles`;

const addRole = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;

const deleteRole = `DELETE FROM roles WHERE id = ?`;

module.exports = {
    viewAllRoles, 
    addRole, 
    deleteRole
};