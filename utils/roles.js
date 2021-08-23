const viewAllRoles = `SELECT role.id, role.title, role.salary, dept.name 
                        AS department
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
