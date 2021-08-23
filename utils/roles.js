const viewAllRoles = `SELECT role.id, role.title, role.salary, dept.name AS department,
                        (SELECT COUNT(*) FROM employees employee WHERE employee.role_id = role.id) employee_count
                        FROM roles role
                        LEFT JOIN departments dept on dept.id = role.department_id
                        ORDER BY role.id`;

const addRole = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;

const deleteRole = `DELETE FROM roles WHERE id = ?`;

module.exports = {
  viewAllRoles,
  addRole,
  deleteRole,
};
