const viewAllEmployees = `SELECT employee.id, employee.first_name, employee.last_name, dept.name AS department, role.title, role.salary, 
                            CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
                            FROM employees employee 
                            LEFT JOIN roles role ON employee.role_id = role.id 
                            LEFT JOIN departments dept ON role.department_id = dept.id 
                            LEFT JOIN employees manager on manager.id = employee.manager_id 
                            ORDER BY employee.id`;

const viewAllManagers = `SELECT manager.id, manager.first_name, manager.last_name, dept.name AS department, role.title
                            FROM employees manager
                            LEFT JOIN roles role ON manager.role_id = role.id 
                            LEFT JOIN departments dept ON role.department_id = dept.id 
                            WHERE manager.manager_id is NULL
                            ORDER BY manager.id`;

const viewAllEmployeesByDepartment = `SELECT  employee.id, employee.first_name, employee.last_name, dept.name AS department, role.title
                                        FROM employees employee
                                        LEFT JOIN roles role ON employee.role_id = role.id
                                        JOIN departments dept ON role.department_id = dept.id
                                        WHERE dept.id = ?
                                        ORDER BY employee.id`;

const viewAllEmployeesByManager = `SELECT employee.id, employee.first_name, employee.last_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
                                    FROM employees employee
                                    JOIN employees manager
                                    WHERE manager.id = ? 
                                    AND employee.manager_id = manager.id`;

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
    viewAllManagers,
    deleteEmployee
};
