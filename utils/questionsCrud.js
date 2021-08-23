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
  return departmentList;
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
  return roleList;
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
  return employeeList;
};

const initializeLists = () => {
  getDepartmentList();
  getRoleList();
  getEmployeeList();
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
  }
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
    }
  },
  {
    type: "list",
    name: "department",
    message: "What Department is this Role in?",
    choices: getDepartmentList(),
    validate: (departmentInput) => {
      if (departmentInput) {
        return true;
      } else {
        console.log("Please provide the Role's Department.");
        return false;
      }
    }
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
  }
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
    choices: getEmployeeList(),
  },
  {
    type: "list",
    name: "manager_id",
    message: "Who do you want to update the Employee's Manager to?",
    choices: getEmployeeList(),
  }
];

const updateEmployeeRoleQuestion = [
  {
    type: "list",
    name: "id",
    message: "Which Employee do you want to update?",
    choices: getEmployeeList(),
  },
  {
    type: "list",
    name: "role_id",
    message: "What do you want to update the Employee's Role to?",
    choices: getRoleList(),
  }
];

const deleteDepartmentQuestion = [
  {
    type: "list",
    name: "id",
    message: "What Department would you like to delete?",
    choices: getDepartmentList(),
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please select a Department.");
        return false;
      }
    },
  }
];

const deleteRoleQuestion = [
  {
    type: "list",
    name: "id",
    message: "What Role would you like to delete?",
    choices: getRoleList(),
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please select a Role.");
        return false;
      }
    },
  }
];

const deleteEmployeeQuestion = [
  {
    type: "list",
    name: "id",
    message: "What Employee would you like to delete?",
    choices: getEmployeeList(),
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please select a Employee.");
        return false;
      }
    },
  }
];

initializeLists();

module.exports = {
  addDepartmentQuestion,
  addRoleQuestion,
  addEmployeeQuestion,
  updateEmployeeManagerQuestion,
  updateEmployeeRoleQuestion,
  deleteDepartmentQuestion,
  deleteRoleQuestion,
  deleteEmployeeQuestion,
  initializeLists
};
