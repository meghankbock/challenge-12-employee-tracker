const viewAllDepartments = `SELECT * FROM departments`;

const addDepartment = `INSERT INTO departments (name) VALUES (?)`;

const deleteDepartment = `DELETE FROM departments WHERE id = ?`;

module.exports = {
    viewAllDepartments, 
    addDepartment, 
    deleteDepartment
};