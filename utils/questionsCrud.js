const db = require("../db/connection");
const departments = require("./departments");
const roles = require("./roles");
const employees = require("./employees");

const departmentList = [];
const roleList = [];
const employeeList = [];

const getDepartmentList = () => {
  db.query(departments.viewAllDepartments, (err, rows) => {
    if (err) {
      console.log(err);
    }
    rows.forEach((row) => {
      departmentList.push(`${row.id} - ${row.name}`);
    });
  });
  console.log("Dept List: " + departmentList);
};

const getRoleList = () => {
  db.query(roles.viewAllRoles, (err, rows) => {
    if (err) {
      console.log(err);
    }
    rows.forEach((row) => {
      roleList.push(`${row.id} - ${row.title}`);
    });
  });
  console.log("Role List: " + roleList);
};

const getEmployeeList = () => {
  db.query(employees.viewAllEmployees, (err, rows) => {
    if (err) {
      console.log(err);
    }
    rows.forEach((row) => {
      employeeList.push(`${row.id} - ${row.first_name} ${row.last_name}`);
    });
  });
  console.log("Employee List: " + employeeList);
};

const addDepartmentQuestion = {
  type: "input",
  name: "name",
  message: "What is the Department name you are adding?",
  validate: (nameInput) => {
    if (nameInput) {
      return true;
    } else {
      console.log("Please provide a Department name.");
      return false;
    }
  },
};

const addRoleQuestion = [
  {
    type: "input",
    name: "title",
    message: "What is the Role title you are adding?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please provide a Role title.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "department",
    message: "What Department is this Role in?",
    choices: departmentList,
    validate: (departmentInput) => {
      if (departmentInput) {
        return true;
      } else {
        console.log("Please provide the Role's Department.");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "salary",
    message: "What is the salary for the Role that you are adding?",
    validate: (salaryInput) => {
      if (salaryInput) {
        return true;
      } else {
        console.log("Please provide the Role's salary.");
        return false;
      }
    },
  },
];

const addEmployeeQuestion = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
  }
];

const updateEmployeeQuestion = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
  }
];

const deleteDeparmentQuestion = [
{
  type: "list",
  name: "action",
  message: "What would you like to do?",
}
];

const deleteRoleQuestion = [
  {
    type: "list",
    name: "id",
    message: "What Role would you like to delete?",
    choices: roleList,
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please select a Role.");
        return false;
      }
    },
  },
];

const deleteEmployeeQuestion = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
  },
];

const crudQuestions = {
  addDepartment: addDepartmentQuestion,
  addRole: addRoleQuestion,
  addEmployee: addEmployeeQuestion,
  updateEmployee: updateEmployeeQuestion,
  deleteDeparment: deleteDeparmentQuestion,
  deleteRole: deleteRoleQuestion,
  deleteEmployee: deleteEmployeeQuestion,
};

const initializeCrudQuestions = () => {
  getDepartmentList();
  getRoleList();
  getEmployeeList();
};

initializeCrudQuestions();

module.exports = crudQuestions;
