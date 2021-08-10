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

const crudQuestions = {
  addDepartment: addDepartmentQuestion,
  addRole: addRoleQuestion,
  addEmployee: addEmployeeQuestion,
  updateEmployee: updateEmployeeQuestion,
  deleteDeparment: deleteDeparmentQuestion,
  deleteRole: deleteRoleQuestion,
  deleteEmployee: deleteEmployeeQuestion,
};

module.exports = crudQuestions;
