const inquirer = require("inquirer");
const db = require("./db/connection");
const actions = require("./utils/actions");
const mainQuestions = require("./utils/questionsMain");
const crudQuestions = require("./utils/questionsCrud.js");
const cTable = require("console.table");

let actionsArray = [];

actions.forEach((action) => {
  actionsArray.push(action.name);
});

const startApp = async () => {
  const input = await inquirer.prompt(mainQuestions);
  menuHandler(input.action);
};

const menuHandler = (action) => {
  const id = (action.charAt(0) + action.charAt(1)).trim();
  let sql = ``;
  let title = "";
  let question = "";
  let type = "";

  actions.forEach((item) => {
    if (item.id == id) {
      sql = item.query;
      title = item.title;
      question = item.question;
      type = item.type;
    }
  });

  if (!question && sql) {
    sqlQueryNoParams(sql, title, type);
  } else if (question && sql) {
    userPrompt(sql, title, question, type);
  } else {
    process.exit();
  }
};

const userPrompt = async (sql, title, questions, type) => {
  let params = [];
  let id;
  let departmentId;
  const input = await inquirer.prompt(questions);
  if (input.id) {
    id = (input.id.charAt(0) + input.id.charAt(1)).trim();
  }
  if (type == "department") {
    if (id) {
      params = [id];
    } else {
      params = [input.name];
    }
  } else if (type == "role") {
    if (id) {
      params = [id];
    } else {
      departmentId = (
        input.department.charAt(0) + input.department.charAt(1)
      ).trim();
      params = [input.title, input.salary, departmentId];
    }
  } else if (type == "employee") {
    if (id && input.manager_id) {
      let managerId = (
        input.manager_id.charAt(0) + input.manager_id.charAt(1)
      ).trim();
      params = [id, managerId];
    } else if (id && input.role_id) {
      let managerId = (
        input.role_id.charAt(0) + input.role_id.charAt(1)
      ).trim();
      params = [id, managerId];
    } else {
      params = [id];
    }
  }
  sqlQueryParams(sql, title, params, type);
};

const sqlQueryParams = (sql, title, params, type) => {
  let id = 0;
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.insertId > 0) {
      id = result.insertId;
    } else {
      id = params[0];
    }
    printResult(id, title, type);
  });
};

const sqlQueryNoParams = (sql, title, type) => {
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    }
    printTable(rows, title);
  });
};

const printTable = (rows, title, type) => {
  console.log("\n");
  console.table(title, rows);
  console.log("\n");
  //crudQuestions.initializeCrudQuestions();
  return startApp();
};

const printResult = (id, title, type) => {
  console.log("\n");
  console.log(type.toUpperCase() + " with ID " + id + " was " + title);
  console.log("\n");
  //crudQuestions.initializeCrudQuestions();
  return startApp();
};

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("Database connected");
});


crudQuestions.initializeCrudQuestions();
startApp();
