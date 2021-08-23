const viewAllDepartments = `SELECT *,
                            (SELECT COUNT(*) FROM roles role WHERE role.department_id = departments.id) role_count FROM departments
                            ORDER BY departments.id`;

const addDepartment = `INSERT INTO departments (name) VALUES (?)`;

const deleteDepartment = `DELETE FROM departments WHERE id = ?`;

module.exports = {
    viewAllDepartments, 
    addDepartment, 
    deleteDepartment
};