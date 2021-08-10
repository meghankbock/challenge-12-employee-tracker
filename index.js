const inquirer = require("inquirer");
const db = require("./db/connection");
const org = require("./utils/organization");

const options = {
  type: "list",
  name: "action",
  message: "What would you like to do?",
  choices: [
    "1 - View all Departments",
    "2 - View all Roles",
    "3 - View all Employees",
    "4 - Add a Department",
    "5 - Add a Role",
    "6 - Add an Employee",
    "7 - Update an Employee",
  ],
};

const startApp = () => {
    console.log("start app");
    return inquirer
    .prompt(options)
    .then((input) => {
      menuHandler(input.action);
    })
    .catch((err) => {
      console.log(err);
    });
};

const menuHandler = (action) => {
  if (action.charAt(0) === 1) {
    org.viewAllDepartments();
  } else if (action.charAt(0) === "2") {
    org.viewAllRoles();
  } else if (action.charAt(0) === "3") {
    org.viewAllEmployees();
  } else if (action.charAt(0) === "4") {
    org.addDepartment();
  } else if (action.charAt(0) === "5") {
    org.addRole();
  } else if (action.charAt(0) === "6") {
    org.addEmployee();
  } else if (action.charAt(0) === "7") {
    org.updateEmployee();
  }
  return startApp();
};

startApp();

db.connect(err => {
    if (err) {
        console.log(err);
        throw err;
    } 
    console.log('Database connected');
});
