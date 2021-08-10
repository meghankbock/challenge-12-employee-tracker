const viewAllEmployees = `SELECT * FROM employees`;

const viewAllEmployeesByDepartment = `SELECT * FROM employees`;

const viewAllEmployeesByManager = `SELECT * FROM employees`;

const addEmployee = `INSERT INTO employees (name) VALUES (?)`;

const updateEmployee = ``;

const deleteEmployee = ``;

module.exports = {
    viewAllEmployees, 
    viewAllEmployeesByDepartment, 
    viewAllEmployeesByManager, 
    addEmployee, 
    updateEmployee, 
    deleteEmployee
};
