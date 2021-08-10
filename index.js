const inquirer = require("inquirer");
const db = require("./db/connection");

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
    console.log("option 1");
  } else if (action.charAt(0) === "2") {
    console.log("option 2");
  } else if (action.charAt(0) === "3") {
    console.log("option 3");
  } else if (action.charAt(0) === "4") {
    console.log("option 4");
  } else if (action.charAt(0) === "5") {
    console.log("option 5");
  } else if (action.charAt(0) === "6") {
    console.log("option 6");
  } else if (action.charAt(0) === "7") {
    console.log("option 7");
  }
};

startApp();

db.connect(err => {
    if (err) {
        console.log(err);
        throw err;
    } 
    console.log('Database connected');
});
