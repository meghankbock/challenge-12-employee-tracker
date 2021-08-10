const viewAllDepartments = `SELECT * FROM departments`;

const addDepartment = `INSERT INTO departments (name) VALUES (?)`;

const deleteDepartment = ``;

module.exports = {
    viewAllDepartments, 
    addDepartment, 
    deleteDepartment
};