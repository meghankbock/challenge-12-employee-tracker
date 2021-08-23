const db = require("../db/connection");
const departments = require("./departments");
const roles = require("./roles");
const employees = require("./employees");

let departmentList = [];
let roleList = [];
let employeeList = [];

const getDepartmentList = () => {
  let tempDepartmentList = [];
  db.query(departments.viewAllDepartments, (err, rows) => {
    if (err) {
      console.log(err);
    }
    rows.forEach((row) => {
      tempDepartmentList.push(`${row.id} - ${row.name}`);
    });
  });
  return departmentList = tempDepartmentList;
};

const getRoleList = () => {
  let tempRoleList = [];
  db.query(roles.viewAllRoles, (err, rows) => {
    if (err) {
      console.log(err);
    }
    rows.forEach((row) => {
      tempRoleList.push(`${row.id} - ${row.title}`);
    });
  });
  return roleList = tempRoleList;
};

const getEmployeeList = () => {
  let tempEmployeeList = [];
  db.query(employees.viewAllEmployees, (err, rows) => {
    if (err) {
      console.log(err);
    }
    rows.forEach((row) => {
      tempEmployeeList.push(`${row.id} - ${row.first_name} ${row.last_name}`);
    });
  });
  return employeeList = tempEmployeeList;
};

const addDepartmentQuestion = [
  {
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
  },
];

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
    type: "input",
    name: "first_name",
    message: "What is the Employee's first name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide the Employee's first name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the Employee's last name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please provide the Employee's last name.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "role_id",
    message: "What is the Employee's Role?",
    choices: roleList,
  },
  {
    type: "list",
    name: "manager_id",
    message: "Who is the Employee's Manager?",
    choices: employeeList,
  },
];

const updateEmployeeManagerQuestion = [
  {
    type: "list",
    name: "id",
    message: "Which Employee do you want to update?",
    choices: employeeList,
  },
  {
    type: "list",
    name: "manager_id",
    message: "Who do you want to update the Employee's Manager to?",
    choices: employeeList,
  },
];

const updateEmployeeRoleQuestion = [
  {
    type: "list",
    name: "id",
    message: "Which Employee do you want to update?",
    choices: employeeList,
  },
  {
    type: "list",
    name: "role_id",
    message: "What do you want to update the Employee's Role to?",
    choices: roleList,
  },
];

const deleteDepartmentQuestion = [
  {
    type: "list",
    name: "id",
    message: "What Department would you like to delete?",
    choices: departmentList,
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please select a Department.");
        return false;
      }
    },
  },
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
    name: "id",
    message: "What Employee would you like to delete?",
    choices: employeeList,
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please select a Employee.");
        return false;
      }
    },
  },
];

const initializeCrudQuestions = () => {
    getDepartmentList();
    getRoleList();
    getEmployeeList();
};

initializeCrudQuestions();

// const questionArray = {
//     addDepartment: addDepartmentQuestion,
//     addRole: addRoleQuestion,
//     addEmployee: addEmployeeQuestion,
//     updateEmployeeManager: updateEmployeeManagerQuestion,
//     updateEmployeeRole: updateEmployeeRoleQuestion,
//     deleteDepartment: deleteDeparmentQuestion,
//     deleteRole: deleteRoleQuestion,
//     deleteEmployee: deleteEmployeeQuestion,
// };

// const questionArray = [
//   addDepartmentQuestion,
//   addRoleQuestion,
//   addEmployeeQuestion,
//   updateEmployeeManagerQuestion,
//   updateEmployeeRoleQuestion,
//   deleteDeparmentQuestion,
//   deleteRoleQuestion,
//   deleteEmployeeQuestion,
// ];

module.exports = {
  addDepartmentQuestion,
  addRoleQuestion,
  addEmployeeQuestion,
  updateEmployeeManagerQuestion,
  updateEmployeeRoleQuestion,
  deleteDepartmentQuestion,
  deleteRoleQuestion,
  deleteEmployeeQuestion,
  initializeCrudQuestions,
};
