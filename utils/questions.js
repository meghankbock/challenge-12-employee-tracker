const menuQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
  choices: [
    "1 - View all Departments",
    "2 - View all Roles",
    "3 - View all Employees",
    "4 - View Employees by Manager",
    "5 - View Employees by Department",
    "6 - Add a Department",
    "7 - Add a Role",
    "8 - Add an Employee",
    "9 - Update an Employee",
    "10 - Delete Department",
    "11 - Delete Role",
    "12 - Delete Employee",
  ],
};

const addDepartmentQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
};

const addRoleQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
};

const addEmployeeQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
};

const updateEmployeeQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
};

const deleteDeparmentQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
};

const deleteRoleQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
};

const deleteEmployeeQuestion = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
};

const questions = {
  start: menuQuestion,
  addDepartment: addDepartmentQuestion,
  addRole: addRoleQuestion,
  addEmployee: addEmployeeQuestion,
  updateEmployee: updateEmployeeQuestion,
  deleteDeparment: deleteDeparmentQuestion,
  deleteRole: deleteRoleQuestion,
  deleteEmployee: deleteEmployeeQuestion,
};

module.exports = questions;
