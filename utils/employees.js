const viewAllEmployees = `SELECT * FROM employees`;

const viewAllEmployeesByDepartment = `SELECT * FROM employees`;

const viewAllEmployeesByManager = `SELECT * FROM employees`;

const addEmployee = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;

const updateEmployeeRole = `UPDATE employees SET role_id = ? WHERE id = ?`;

const updateEmployeeManager = `UPDATE employees SET manager_id = ? WHERE id = ?`;

const deleteEmployee = `DELETE FROM employees WHERE id = ?`;

module.exports = {
    viewAllEmployees, 
    viewAllEmployeesByDepartment, 
    viewAllEmployeesByManager, 
    addEmployee, 
    updateEmployeeRole,
    updateEmployeeManager, 
    deleteEmployee
};
