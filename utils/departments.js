const viewAllDepartments = `SELECT * FROM departments`;

const addDepartment = `INSERT INTO departments (name) VALUES (?)`;

const deleteDepartment = ``;

const sql = {
    view: viewAllDepartments,
    add: addDepartment,
    delete: deleteDepartment,
};

module.exports = {viewAllDepartments, addDepartment, deleteDepartment};